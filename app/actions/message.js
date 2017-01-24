import { NONE_CALL_REDUCER } from './constant-type'

function _changeMessage(messages) {
    return {
        type: 'MESSAGES_CHANGED',
        payload: { messages }
    }
}

export function changeMessage(payload) {
    return _changeMessage(payload)
}

export const attachMessage = dispatch => selected_room => {
    const ref = `/messages/${selected_room._id}`

    dispatch({
        type: NONE_CALL_REDUCER,
        database: {
            name: 'FIREBASE',
            method: 'attach',
            cb: (messages) => dispatch(_changeMessage(messages)),
            isSocket: true,
            ref
        }
    })
} 