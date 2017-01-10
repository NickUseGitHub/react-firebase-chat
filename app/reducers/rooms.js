export default function(rooms = [], action) {
    const { type, payload } = action

    switch(action.type) {
        case 'ADD_ROOMS': 
            rooms = rooms.concat(payload.room)
            return rooms
        case 'INIT_ROOMS': 
            rooms = payload.rooms
        default: return rooms
    }
}