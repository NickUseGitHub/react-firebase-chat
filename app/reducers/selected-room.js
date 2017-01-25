export default function(prev_room_id = null, action) {
    const { type, payload } = action

    switch(type) {
        case 'SELECT_ROOM': 
            const { room_id } = payload
            return room_id || prev_room_id
        default: return prev_room_id
    }
}