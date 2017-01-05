import { initDb } from '../lib/database/db'

var db = null

export default function(messages = [], action) {
    switch(action.type) {
        case 'INIT_ROOM': 
            db = initDb(`/messages/${action.roomName}`)
            return messages
        case 'ADD_MESSAGE': 
            db.add(action.message)
            db.once('value').then(snapshot => {
                messages = snapshot.val()
            })
            return message 
        default: return messages
    }
}