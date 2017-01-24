function _initRooms(rooms) {
    return {
        type: 'INIT_ROOMS',
        payload: { rooms }
    }
}

export function selectRoom(room) {
    return {
        type: 'SELECT_ROOM',
        payload: { room }
    }
}

export const attachRooms = dispatch => ref => {
    console.log("rooms action -- attachRooms")
    dispatch({
        type: 'NONE_CALL_REDUCER',
        database: {
            name: 'FIREBASE',
            method: 'attach',
            isSocket: { cb: (rooms) => dispatch(_initRooms(rooms)) },
            ref
        }
    })
}