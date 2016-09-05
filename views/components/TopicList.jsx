import React from 'react'
import {Link} from 'react-router'

module.exports = React.createClass({
  renderRow() {
    return this.props.dataSource.map((item) => {
      return <li key={item.id}>
        <Link to={`/topics/${item.id}`}>{item.title}</Link>
      </li>
    })
  },
  render() {
    return <div>
      <ul>{this.renderRow()}</ul>
    </div>
  }
})
