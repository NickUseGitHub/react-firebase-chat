export function addMessage(message) {
    return {
        type: 'ADD_MESSAGE',
        message
    }
}

export function changeMessage(message) {
    const tmessages =  Object.entries(message)
    console.log("messageActionCreator", tmessages)

    return {
        type: 'MESSAGES_CHANGED',
        message: []
    }
}
