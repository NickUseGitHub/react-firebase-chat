function _changeMessage(payload) {
    return {
        type: 'MESSAGES_CHANGED',
        payload
    }
}

export function changeMessage(payload) {
    return _changeMessage(payload)
}

export function attachMessage(dispatch) {
    return (selected_room) => {
        return {
            type: 'MESSAGES_ATTACHED',
            payload: { selected_room, cb: (snap) => dispatch(_changeMessage(snap)) }
        }
    } 
}