export default function(selected_room = null, action) {
    switch(action.type) {
        case 'INIT_ROOM': 
            selected_room = action.room
            return selected_room
        default: return selected_room
    }
}