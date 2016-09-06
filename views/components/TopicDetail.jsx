import React from 'react'

module.exports = React.createClass({
  render() {
    return <div>
      <div>{this.props.dataSource.title}</div>
      <div dangerouslySetInnerHTML={{__html: this.props.dataSource.body_html}} />
    </div>
  }
})
