export default function(db = null, action) {
    const { type, payload } = action
    switch(type) {
        case 'INIT_DB': 
            return payload.db
        default: return db
    }
}