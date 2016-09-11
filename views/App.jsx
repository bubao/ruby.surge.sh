import React from 'react'
import {connect} from 'react-redux'
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
      }
    }
  },
  componentDidMount() {
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
      <Navbar openModal={() => {
        this.setState({
          login: {
            presence: true
          }
        })
      }} />
      {this.renderChildren()}
      <LoginModal open={this.state.login.presence} closeModal={() => {
        this.setState({
          login: {
            presence: false
          }
        })
      }} />
    </div>
  }
}))
