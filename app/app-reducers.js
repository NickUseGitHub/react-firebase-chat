import { combineReducers } from 'redux'

//reducers
import chatListReducer from './reducers/chat-list'
import memberReducer from './reducers/member'
import roomsReducer from './reducers/rooms'
import selectedRoomReducer from './reducers/selected-room'

export default combineReducers({
    chat_list: chatListReducer,
    member: memberReducer,
    rooms: roomsReducer,
    selected_room: selectedRoomReducer
})