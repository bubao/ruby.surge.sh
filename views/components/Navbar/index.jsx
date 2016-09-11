import React from 'react'
import {Link} from 'react-router'
import {i18n} from '../../../settings'

module.exports = React.createClass({
  render() {
    return <nav className="navbar navbar-light bg-faded">
      <ul className="nav navbar-nav pull-xs-right">
        {
          this.props.currentUser.login ? ((currentUser) => {
            return <li className="nav-item">
              <Link to={`/${currentUser.login}`} className="nav-link">{currentUser.login}</Link>
            </li>
          })(this.props.currentUser) : (() => {
            return <li className="nav-item">
              <a href="/login" className="nav-link" onClick={(event) => {
                event.preventDefault()
                this.props.openModal()
              }}>{i18n.zh_CN.login}</a>
            </li>
          })()
        }
      </ul>
    </nav>
  }
})
