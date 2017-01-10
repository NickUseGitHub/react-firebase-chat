export default function(selected_room = null, action) {
    const { type, payload } = action

    switch(type) {
        case 'ADD_ROOMS': 
        case 'INIT_ROOM': 
            selected_room = payload.room
            return selected_room
        default: return selected_room
    }
}