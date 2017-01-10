export default function(firebaseDB = null, action) {
    const { type, payload } = action
    switch(type) {
        case 'INIT_DB': 
            return payload.firebaseDB
        default: return firebaseDB
    }
}