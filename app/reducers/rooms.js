import is from 'is_js'

function getRooms(payload) {
    const rooms = []
    const { snap } = payload

    if (is.not.empty(snap)
    && is.not.undefined(snap)){
        Object.keys(snap).forEach(room_key => rooms.push(snap[room_key]))
    }

    return rooms
}

export default function(rooms = [], action) {
    const { type, payload } = action

    switch(action.type) {
        case 'ATTACH_ROOMS':
            return getRooms(payload)
        case 'INIT_ROOMS': 
            rooms = getRooms(payload)
        default: return rooms
    }
}