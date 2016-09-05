import React from 'react'
import superagent from 'superagent'
import {API_URL} from '../../constants'
import TopicList from '../components/TopicList'

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
      {
        this.props.topics.length > 1 ? ((dataSource) => {
          return <TopicList dataSource={dataSource} />
        })(this.props.topics) : null
      }
    </div>
  }
})
