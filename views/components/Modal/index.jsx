import React from 'react'
import classnames from 'classnames'

module.exports = React.createClass({
  propTypes: {
    fadeIn: React.PropTypes.bool.isRequired,
    handleFadeIn: React.PropTypes.func.isRequired
  },
  render() {
    return <div className="modal-layout">
      <div className={classnames('modal-backdrop fade', { in: this.props.fadeIn })} style={{
        display: this.props.fadeIn ? 'block' : 'none'
      }} />
      <div className={classnames('modal fade', { in: this.props.fadeIn })} style={{
        display: this.props.fadeIn ? 'block' : 'none'
      }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" type="button" onClick={this.props.handleFadeIn}>
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
