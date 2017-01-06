import firebase from '../firebase/app'

class Db {
    constructor(ref, db) {
        this.ref = ref
        this.db = db
    }

    add(item) {
        const newItem = this.db.push()
        newItem.set(item)
    }

    getDbObj() {
        return this.db
    }
}

export function initDb(ref) {
    const db = firebase.database().ref(ref)
    return new Db(ref, db)
}