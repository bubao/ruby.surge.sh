import React from 'react'

module.exports = React.createClass({
  propTypes: {
    dataSource: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object
    ]).isRequired
  },
  render() {
    return <div>
      <div>{this.props.dataSource.title}</div>
      <div dangerouslySetInnerHTML={{__html: this.props.dataSource.body_html}} />
    </div>
  }
})
