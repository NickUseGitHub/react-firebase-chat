import { initDb } from '../lib/database/db'

var db = null

export default function(messages = [], action) {
    switch(action.type) {
        case 'INIT_ROOM': 
            let room = action.room
            db = initDb(`/messages/${room.name}`)
            return messages
        case 'ADD_MESSAGE': 
            db.add(action.message)
            db.getDbObj().once('value').then(snapshot => {
                console.log("firebase", snapshot.val())
                messages = snapshot.val()
            })
            return messages 
        default: return messages
    }
}