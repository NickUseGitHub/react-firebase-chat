import is from 'is_js'

export default function(messages = [], action) {
    const { type, payload } = action
    
    switch(type) {
        case 'SELECT_ROOM':
            return []
        case 'ADD_MESSAGE': 
            return Object.assign({}, messages.concat(payload.message))
        case 'MESSAGES_CHANGED':
            return payload.messages
        default: return messages
    }
}