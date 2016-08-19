import React from 'react'
import {connect} from 'react-redux'

module.exports = connect((state) => {
  return {
    users: []
  }
})(React.createClass({
  componentDidMount() {
    console.log(this.props)
    console.log(this.state)
  },
  render() {
    return <div>App</div>
  }
}))
