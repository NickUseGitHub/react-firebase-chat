import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import firebase from 'firebase/app'
import 'firebase/database'
import firebaseConf from './config/firebase'

firebase.initializeApp(firebaseConf)

//init routes
import routes from './routes'

//call appReducers
import appReducers from './app-reducers'
const store = createStore(appReducers)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)