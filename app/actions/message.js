export function addMessage(message) {
    return {
        type: 'ADD_MESSAGE',
        payload: {messages: [message]}
    }
}

export function changeMessage(messages) {
    // const tmessages =  Object.entries(messages)
    // console.log("messageActionCreator", tmessages)

    return {
        type: 'MESSAGES_CHANGED',
        payload: {messages: []}
    }
}
