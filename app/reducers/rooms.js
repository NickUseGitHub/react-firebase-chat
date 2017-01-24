import is from 'is_js'

function getRooms(payload) {
    const newRooms = []
    const { rooms } = payload

    if (is.not.empty(rooms)
    && is.not.undefined(rooms)
    && is.not.null(rooms)){
        Object.keys(rooms).forEach(room_key => newRooms.push(rooms[room_key]))
    }

    return newRooms
}

export default function(rooms = [], action) {
    const { type, payload } = action

    switch(action.type) {
        case 'INIT_ROOMS': 
            return getRooms(payload)
        default: return rooms
    }
}