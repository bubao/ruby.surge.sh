import React from 'react'
import superagent from 'superagent'
import Modal from './Modal'
import {i18n} from '../../settings'
import {OAUTH_URL} from '../../constants'

module.exports = React.createClass({
  getInitialState() {
    return {
      login: {
        username: String(),
        password: String()
      }
    }
  },
  handleChange(event) {
    const login = this.state.login
    login[event.target.name] = event.target.value

    this.setState({
      login: login
    })
  },
  handleSubmit(event) {
    event.preventDefault()
    superagent.post(`${OAUTH_URL}/token?grant_type=password`).send(this.state.login).then((response) => {
      this.props.login(response.body)
      this.props.closeModal()
    }).catch((error) => {
    })
  },
  render() {
    return <Modal open={this.props.open} title={i18n.zh_CN.login} closeModal={this.props.closeModal}>
      <form acceptCharset="UTF-8" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" name="username" value={this.state.login.username} className="form-control" placeholder={i18n.zh_CN.username} onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="password" name="password" value={this.state.login.password} className="form-control" placeholder={i18n.zh_CN.password} onChange={this.handleChange} />
        </div>
        <button className="btn btn-block btn-primary">{i18n.zh_CN.login}</button>
      </form>
    </Modal>
  }
})
