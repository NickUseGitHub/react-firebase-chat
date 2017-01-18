export function initRooms(payload) {
    return {
        type: 'INIT_ROOMS',
        payload
    }
}

export function attachRooms(payload) {
    return {
        type: 'ATTACH_ROOMS',
        payload
    }
}