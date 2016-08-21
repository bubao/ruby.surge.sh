import React from 'react'
import {connect} from 'react-redux'

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
      {
        React.Children.map(this.props.children, (e) => {
          return React.cloneElement(e, {
            dispatch: this.props.dispatch,
            topics: this.props.topics,
            users: this.props.users
          })
        })
      }
    </div>
  }
}))
