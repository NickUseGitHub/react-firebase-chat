export default function(room_id = null, action) {
    const { type, payload } = action

    switch(type) {
        case 'SELECT_ROOM': 
            return payload.room_id
        default: return room_id
    }
}