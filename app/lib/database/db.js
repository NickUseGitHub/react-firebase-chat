import firebase from '../firebase/app'

class Db {
    constructor(db) {
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

export function initDb(db) {
    return new Db(db)
}