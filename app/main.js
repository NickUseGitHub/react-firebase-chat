import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import firebase from 'firebase/app'
import 'firebase/database'
import firebaseConf from './config/firebase'
import store from './store'

//init routes
import routes from './routes'

firebase.initializeApp(firebaseConf)

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
)