import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {Router, browserHistory} from 'react-router'
import {routerReducer as routing, syncHistoryWithStore} from 'react-router-redux'
import reducers from './reducers'
import styles from './styles'
import routes from './routes'

const store = createStore(combineReducers({
  routing: routing,
  users: reducers.users,
  topics: reducers.topics
}))

render(((history) => {
  return <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>
})(syncHistoryWithStore(browserHistory, store)), document.getElementById('layout-views'))
