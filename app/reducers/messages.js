import is from 'is_js'

function getMessage(payload) {
    const newMessages = []
    const { messages } = payload
    
    if (is.not.empty(messages)
    && is.not.undefined(messages)
    && is.not.null(messages)) {
        Object.keys(messages).forEach( message_key => newMessages.push(messages[message_key]) )
    }
    return newMessages
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