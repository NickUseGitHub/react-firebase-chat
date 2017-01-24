import { createStore, applyMiddleware } from 'redux'

//import middlewares
import firebaseMiddleware from './middlewares/firebase'
import testMiddleware from './middlewares/test'

//call appReducers
import appReducers from './app-reducers'

//middlewares
const middlewares = [firebaseMiddleware, testMiddleware]

export default createStore(appReducers, applyMiddleware(...middlewares))