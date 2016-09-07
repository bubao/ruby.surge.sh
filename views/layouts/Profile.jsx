import React from 'react'
import {i18n} from '../settings'

module.exports = React.createClass({
  componentDidMount() {
    document.title = i18n.zh_CN.pages_404
  },
  render() {
    return <div className="container">{i18n.zh_CN.pages_404}</div>
  }
})
