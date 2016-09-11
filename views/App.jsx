import React from 'react'
import {connect} from 'react-redux'
import superagent from 'superagent'
import {API_URL} from '../constants'
import Navbar from './components/Navbar'
import LoginModal from './components/LoginModal'

module.exports = connect((state) => {
  return {
    users: state.users,
    topics: state.topics
  }
})(React.createClass({
  getInitialState() {
    return {
      login: {
        presence: false
      },
      currentUser: {},
      accessToken: localStorage.getItem('access_token')
    }
  },
  componentDidMount() {
    this.state.accessToken && this.setAuthorizedUser(this.state.accessToken)
  },
  setAuthorizedUser(accessToken, forceUpdate = false) {
    forceUpdate && this.setState({
      accessToken: accessToken
    })
    superagent.get(`${API_URL}/users/me?access_token=${accessToken}`).then((response) => {
      this.setState({
        currentUser: response.body.user || {}
      })
    }).catch((error) => {
    })
  },
  renderChildren() {
    return React.Children.map(this.props.children, (e) => {
      return React.cloneElement(e, {
        dispatch: this.props.dispatch,
        replies: this.props.replies,
        topics: this.props.topics,
        users: this.props.users
      })
    })
  },
  render() {
    return <div className="layout-views">
      <Navbar currentUser={this.state.currentUser} openModal={() => {
        this.setState({
          login: {
            presence: true
          }
        })
      }} />
      {this.renderChildren()}
      <LoginModal open={this.state.login.presence} login={(object) => {
        localStorage.setItem('access_token', object.access_token)
        this.setAuthorizedUser(object.access_token, true)
      }} closeModal={() => {
        this.setState({
          login: {
            presence: false
          }
        })
      }} />
    </div>
  }
}))
