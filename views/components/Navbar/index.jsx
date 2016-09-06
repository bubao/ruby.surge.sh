import React from 'react'
import {i18n} from '../../../settings'

module.exports = React.createClass({
  render() {
    return <nav className="navbar navbar-light bg-faded">
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <a href="/login" className="nav-link">{i18n.zh_CN.login}</a>
        </li>
      </ul>
    </nav>
  }
})
