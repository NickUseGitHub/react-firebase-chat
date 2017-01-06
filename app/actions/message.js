export function changeMessage(messages) {
    messages = Object.values(messages)
    return {
        type: 'MESSAGES_CHANGED',
        payload: {messages: messages}
    }
}
