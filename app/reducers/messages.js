export default function(messages = [], action) {
    switch(action.type) {
        case 'MESSAGES_CHANGED': 
            messages = action.messages
        default: return messages
    }
}