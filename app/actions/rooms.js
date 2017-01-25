import { NONE_CALL_REDUCER } from './constant-type'

function _initRooms(rooms) {
    return {
        type: 'INIT_ROOMS',
        payload: { rooms }
    }
}

export function selectRoomId(room_id) {
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
            result_type: 'list',
            cb: (rooms) => dispatch(_initRooms(rooms))
        }
    })
}

export function addRoom(roomName) {
    return {
        type: 'ADD_ROOM',
        payload:{ roomName },
        database: {
            name: 'FIREBASE',
            method: 'add',
            ref: `/Rooms`
        }
    }
}