export function addRoom(room) {
    return {
        type: 'ADD_ROOM',
        payload: { room }
    }
}

export function initRoom(room) {
    return {
        type: 'INIT_ROOM',
        payload: { room }
    }
}
