import React from 'react'
import superagent from 'superagent'
import {API_URL} from '../../constants'

module.exports = React.createClass({
  componentDidMount() {
    superagent.get(`${API_URL}/topics`).then((response) => {
      this.props.dispatch({
        type: 'topics.latest',
        topics: response.body.topics || []
      })
    }).catch((error) => {
    })
  },
  render() {
    return <div>
      <ul>
        {
          this.props.topics.map((topic) => {
            return <li key={topic.id}>{topic.title}</li>
          })
        }
      </ul>
    </div>
  }
})
