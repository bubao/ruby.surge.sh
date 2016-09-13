import React from 'react'
import {Link} from 'react-router'
import Avatar from './Avatar'
import timeago from '../../utils/timeago'

module.exports = React.createClass({
  propTypes: {
    dataSource: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object
    ]).isRequired
  },
  renderRow() {
    return this.props.dataSource.map((item) => {
      return <li key={item.id}>
        <Link to={`/topics/${item.id}`} className="item-title">{item.title}</Link>
        <Avatar to={`/${item.user.login}`} size={40} source={((url) => {
          return url ? url.replace(/\!.+$/, '!md') : url
        })(item.user.avatar_url)} className="item-avatar" />
        <div className="item-meta">
          <Link to={`/nodes/${item.node_id}`} className="item-node-name">{item.node_name}</Link>
          <span className="item-middot">{String.fromCharCode(183)}</span>
          <Link to={`/${item.last_reply_user_login}`} className="item-node-name">{item.last_reply_user_login}</Link>
          <span className="item-middot">{String.fromCharCode(183)}</span>
          <span className="item-timeago">{timeago(item.replied_at)}</span>
        </div>
        <div className="item-replies">
          <div className="item-replies-count">{item.replies_count}</div>
          <div className="item-replies-text"></div>
        </div>
      </li>
    })
  },
  render() {
    return <div className="topic-items">
      <ul>{this.renderRow()}</ul>
    </div>
  }
})
