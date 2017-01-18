import is from 'is_js'

function getMessage(payload) {
    const messages = []
    const { snap } = payload
    
    if (is.not.empty(snap)
    && is.not.undefined(snap)) {
        Object.keys(snap).forEach(message_key=>messages.push(snap[message_key]))
    }
    return messages
}

export default function(messages = [], action) {
    const { type, payload } = action
    
    switch(type) {
        case 'ADD_MESSAGE': 
            return Object.assign({}, messages.concat(payload.messages))
        case 'MESSAGES_CHANGED':
            return getMessage(payload)
        default: return messages
    }
}