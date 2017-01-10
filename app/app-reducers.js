import { combineReducers } from 'redux'

//reducers
import dbReducer from './reducers/db'
import messageReducer from './reducers/messages'
import memberReducer from './reducers/member'
import roomsReducer from './reducers/rooms'
import selectedRoomReducer from './reducers/selected-room'

export default combineReducers({
    db: dbReducer,
    messages: messageReducer,
    member: memberReducer,
    rooms: roomsReducer,
    selected_room: selectedRoomReducer
})