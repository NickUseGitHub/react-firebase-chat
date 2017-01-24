import { combineReducers } from 'redux'

//reducers
import messageReducer from './reducers/messages'
import memberReducer from './reducers/member'
import roomsReducer from './reducers/rooms'
import selectedRoomReducer from './reducers/selected-room'

export default combineReducers({
    messages: messageReducer,
    member: memberReducer,
    rooms: roomsReducer,
    selected_room_id: selectedRoomReducer
})