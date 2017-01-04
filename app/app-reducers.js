import { combineReducers } from 'redux'

//reducers
import roomsReducer from './reducers/rooms'
import selectedRoomReducer from './reducers/selected-room'

export default combineReducers({
    rooms: roomsReducer
})