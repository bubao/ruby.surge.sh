import React from 'react'
import Modal from './Modal'
import {i18n} from '../../settings'

module.exports = React.createClass({
  render() {
    return <Modal open={this.props.open} title={i18n.zh_CN.login} closeModal={this.props.closeModal}>
    </Modal>
  }
})
