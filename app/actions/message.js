export function changeMessage(payload) {
    console.log("changeMessage", payload)
    return {
        type: 'MESSAGES_CHANGED',
        payload
    }
}
