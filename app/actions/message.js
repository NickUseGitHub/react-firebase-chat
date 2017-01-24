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
    dispatch({
        type: 'MESSAGES_ATTACHED',
        payload: { selected_room, cb: (messages) => dispatch(_changeMessage(messages)) }
    })
} 