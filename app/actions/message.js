function _changeMessage(payload) {
    return {
        type: 'MESSAGES_CHANGED',
        payload
    }
}

export function changeMessage(payload) {
    return _changeMessage(payload)
}
