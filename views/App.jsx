import React from 'react'
import {connect} from 'react-redux'
import Modal from './components/Modal'
import Navbar from './components/Navbar'

module.exports = connect((state) => {
  return {
    users: state.users,
    topics: state.topics
  }
})(React.createClass({
  getInitialState() {
    return {
      fadeIn: true
    }
  },
  componentDidMount() {
  },
  handleFadeIn() {
    this.setState({
      fadeIn: ! this.state.fadeIn
    })
  },
  render() {
    return <div className="layout-views">
      <Modal fadeIn={this.state.fadeIn} handleFadeIn={this.handleFadeIn} />
      <Navbar handleFadeIn={this.handleFadeIn} />
      {
        React.Children.map(this.props.children, (e) => {
          return React.cloneElement(e, {
            dispatch: this.props.dispatch,
            replies: this.props.replies,
            topics: this.props.topics,
            users: this.props.users
          })
        })
      }
    </div>
  }
}))
