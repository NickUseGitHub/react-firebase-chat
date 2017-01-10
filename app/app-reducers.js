import { combineReducers } from 'redux'

//reducers
import firebaseDBReducer from './reducers/firebase-db'
import messageReducer from './reducers/messages'
import memberReducer from './reducers/member'
import roomsReducer from './reducers/rooms'
import selectedRoomReducer from './reducers/selected-room'

export default combineReducers({
    firebaseDB: firebaseDBReducer,
    messages: messageReducer,
    member: memberReducer,
    rooms: roomsReducer,
    selected_room: selectedRoomReducer
})