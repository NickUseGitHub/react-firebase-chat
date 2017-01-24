function _changeMessage(payload) {
    return {
        type: 'MESSAGES_CHANGED',
        payload
    }
}

export function changeMessage(payload) {
    return _changeMessage(payload)
}

export const attachMessage = dispatch => selected_room => {
    dispatch({
        type: 'MESSAGES_ATTACHED',
        payload: { selected_room, cb: () => console.log("Hello world") }
    })
} 