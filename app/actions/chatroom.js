export function selectRoom(room) {
    return {
        type: 'SELECT_ROOM',
        payload: { room }
    }
}