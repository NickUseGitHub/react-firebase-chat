import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import firebase from 'firebase/app'
import 'firebase/database'
import firebaseConf from './config/firebase'

//import middlewares
import firebaseMiddleware from './middlewares/firebase'
import testMiddleware from './middlewares/test'

//init routes
import routes from './routes'

firebase.initializeApp(firebaseConf)

//middlewares
const middlewares = [firebaseMiddleware, testMiddleware]

//call appReducers
import appReducers from './app-reducers'
const store = createStore(appReducers, applyMiddleware(...middlewares))

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)