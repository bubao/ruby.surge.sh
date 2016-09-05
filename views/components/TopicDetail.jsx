import React from 'react'

module.exports = React.createClass({
  render() {
    return <div>
      {
        this.props.dataSource.length == 1 ? ((item) => {
          return <div>{item.title}</div>
        })(this.props.dataSource[0]) : null
      }
    </div>
  }
})
