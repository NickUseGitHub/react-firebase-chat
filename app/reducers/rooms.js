export default function(rooms = [], action) {
    const { type, payload } = action

    switch(action.type) {
        case 'INIT_ROOMS': 
            rooms = payload.rooms
        default: return rooms
    }
}