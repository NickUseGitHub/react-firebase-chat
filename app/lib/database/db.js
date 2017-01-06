import firebase from '../firebase/app'

class Db {
    constructor(ref, db) {
        this.ref = ref
        this.db = db
    }

    add(item) {
        const prom = new Promise((resolve, reject) => {
            const newItem = this.db.push()
            item._id = newItem.key
            newItem.set(item)
            resolve(item)
        })
        return prom
    }

    getDbObj() {
        return this.db
    }
}

export function initDb(ref) {
    const db = firebase.database().ref(ref)
    return new Db(ref, db)
}