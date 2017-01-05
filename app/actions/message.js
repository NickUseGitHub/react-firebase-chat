export function initRoom(room) {
    return {
        type: 'INIT_ROOM',
        room
    }
}

export function addMessage(message) {
    return {
        type: 'ADD_MESSAGE',
        message
    }
}