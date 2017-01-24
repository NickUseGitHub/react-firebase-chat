import { createStore, applyMiddleware } from 'redux'

//import middlewares
import firebaseMiddleware from './middlewares/firebase'

//call appReducers
import appReducers from './app-reducers'

//middlewares
const middlewares = [firebaseMiddleware]

export default createStore(appReducers, applyMiddleware(...middlewares))