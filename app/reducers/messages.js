export default function(messages = [], action) {
    const { type, payload} = action
    
    switch(type) {
        case 'ADD_MESSAGE': 
            messages = messages.concat(payload.messages)
            return messages

        case 'MESSAGES_CHANGED': 
            messages = payload.messages
        default: return messages
    }
}