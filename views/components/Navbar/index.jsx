import React from 'react'
import {IndexLink, Link} from 'react-router'
import {i18n} from '../../../settings'

module.exports = React.createClass({
  render() {
    return <nav className="navbar navbar-light bg-faded">
      <div className="container" style={{
      }}>
        <IndexLink to="/" className="navbar-brand">Brand</IndexLink>
        <ul className="nav navbar-nav pull-xs-right">
          {
            this.props.currentUser.login ? ((currentUser) => {
              return [
                <li key={currentUser.id} className="nav-item">
                  <Link to={`/${currentUser.login}`} className="nav-link">{currentUser.login}</Link>
                </li>,
                <li key={+new Date()} className="nav-item">
                  <a href="/logout" className="nav-link" onClick={(event) => {
                    event.preventDefault()
                    localStorage.clear()
                    window.reload()
                  }}>{i18n.zh_CN.logout}</a>
                </li>
              ]
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
      </div>
    </nav>
  }
})
