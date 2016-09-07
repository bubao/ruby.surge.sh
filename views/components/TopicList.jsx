import React from 'react'
import {Link} from 'react-router'

module.exports = React.createClass({
  renderRow() {
    return this.props.dataSource.map((item) => {
      return <li key={item.id}>
        <Link to={`/topics/${item.id}`} className="item-title">{item.title}</Link>
        <Link to={`/topics/${item.id}`} className="item-avatar">
        </Link>
      </li>
    })
  },
  render() {
    return <div className="topic-items">
      <ul>{this.renderRow()}</ul>
    </div>
  }
})
