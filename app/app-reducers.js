import { combineReducers } from 'redux'
import roomsReducer from './reducers/rooms'

export default combineReducers({
    rooms: roomsReducer
})