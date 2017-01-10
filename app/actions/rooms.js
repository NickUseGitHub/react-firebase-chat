export function initRooms(rooms) {
    return {
        type: 'INIT_ROOMS',
        payload: {rooms}
    }
}