export function initRoom(room) {
    return {
        type: 'INIT_ROOM',
        payload: { room }
    }
}