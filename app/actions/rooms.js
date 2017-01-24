import { NONE_CALL_REDUCER } from './constant-type'

function _initRooms(rooms) {
    return {
        type: 'INIT_ROOMS',
        payload: { rooms }
    }
}

export function selectRoom(room_id) {
    return {
        type: 'SELECT_ROOM',
        payload: { room_id }
    }
}

export const attachRooms = dispatch => ref => {
    dispatch({
        type: NONE_CALL_REDUCER,
        database: {
            name: 'FIREBASE',
            method: 'attach',
            isSocket: true,
            ref: ref,
            cb: (rooms) => dispatch(_initRooms(rooms))
        }
    })
}