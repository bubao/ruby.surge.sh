import React from 'react'
import superagent from 'superagent'
import {API_URL} from '../../constants'
import TopicDetail from '../components/TopicDetail'

module.exports = React.createClass({
  componentDidMount() {
    superagent.get(`${API_URL}/topics/${this.props.params.id}`).then((response) => {
      this.props.dispatch({
        type: 'topics.detail',
        detail: response.body.topic || {}
      })
    }).catch((error) => {
    })
  },
  render() {
    return <div>
      {
        this.props.topics.length == 1 ? ((dataSource) => {
          return <TopicDetail dataSource={dataSource} />
        })(this.props.topics[0]) : null
      }
    </div>
  }
})
