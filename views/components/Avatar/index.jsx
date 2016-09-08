import React from 'react'
import {Link} from 'react-router'

module.exports = React.createClass({
  propTypes: {
    to: React.PropTypes.string.isRequired,
    source: React.PropTypes.string.isRequired
  },
  getDefaultProps() {
    return {
      size: 200
    }
  },
  render() {
    return <Link to={this.props.to} className={this.props.className}>
      <img src={this.props.source} style={{
        width: `${this.props.size}px`
      }} className="img-circle" />
    </Link>
  }
})
