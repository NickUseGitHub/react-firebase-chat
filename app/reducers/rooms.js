import is from 'is_js'

export default function(rooms = [], action) {
    const { type, payload } = action

    switch(action.type) {
        case 'INIT_ROOMS': 
            return payload.rooms
        default: return rooms
    }
}