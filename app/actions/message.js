import { NONE_CALL_REDUCER } from './constant-type'

function _getRef(selected_room_id) {
    return `/messages/${selected_room_id}`
}

function _changeMessage(messages) {
    return {
        type: 'MESSAGES_CHANGED',
        payload: { messages }
    }
}

export function changeMessage(payload) {
    return _changeMessage(payload)
}

export function distachMessage(selected_room_id) {
    return {
        type: 'DISTACH_MESSAGE',
        database: {
            name: 'FIREBASE',
            method: 'distach',
            ref: _getRef(selected_room_id)
        }
    }
}

export const attachMessage = dispatch => selected_room_id => {
    dispatch({
        type: NONE_CALL_REDUCER,
        database: {
            name: 'FIREBASE',
            method: 'attach',
            isSocket: true,
            ref: _getRef(selected_room_id),
            cb: (messages) => dispatch(_changeMessage(messages))
        }
    })
} 