import React from 'react'
import {connect} from 'react-redux'
import Navbar from './components/Navbar'

module.exports = connect((state) => {
  return {
    users: state.users,
    topics: state.topics
  }
})(React.createClass({
  componentDidMount() {
  },
  render() {
    return <div>
      <Navbar />
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
