export function changeMessage(messages) {
    return {
        type: 'MESSAGES_CHANGED',
        payload: {messages: messages}
    }
}
