import firebase from '../firebase/app'

class Db {
    constructor(ref, db) {
        this.ref = ref
        this.db = db
    }

    add(item) {
        const newKey = this.db.push().key
        const updates = {}
        updates[newKey] = item
        this.db.update(updates)
    }
}

export function initDb(ref) {
    const db = firebase.database().ref(ref)
    return new Db(ref, db)
}