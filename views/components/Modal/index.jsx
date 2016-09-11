import React from 'react'
import classnames from 'classnames'

module.exports = React.createClass({
  propTypes: {
    open: React.PropTypes.bool.isRequired,
    closeModal: React.PropTypes.func.isRequired
  },
  render() {
    return <div className="modal-layout">
      <div className={classnames('modal fade', { 'in d-block': this.props.open })}>
        <div className={classnames('modal-backdrop fade', { in: this.props.open })} onClick={this.props.closeModal} />
        <div className="modal-dialog" style={{ zIndex: 'inherit' }}>
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" type="button" onClick={this.props.closeModal}>
                <span>&times;</span>
              </button>
              <div className="modal-title"></div>
            </div>
            <div className="modal-body"></div>
          </div>
        </div>
      </div>
    </div>
  }
})
