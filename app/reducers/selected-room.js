export default function(selected_room = null, action) {
    const { type, payload } = action

    switch(type) {
        case 'SELECT_ROOM': 
            selected_room = payload.room
        default: return selected_room
    }
}