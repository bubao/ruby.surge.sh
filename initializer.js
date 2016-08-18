import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers} from 'redux'
import {Router, browserHistory} from 'react-router'
import {routerReducer as routing, syncHistoryWithStore} from 'react-router-redux'

import reducers from './reducers'

const store = createStore(combineReducers({
  reducers: reducers,
  routing: routing
}))

render(<Provider store={store}>
  <Router history={syncHistoryWithStore(browserHistory, store)} />
</Provider>, document.getElementById('application'))
