import firebase from '../lib/firebase/app'

export default class firebaseAPI {
    static add(option, item) {

        const { ref } = option

        const prom = new Promise((resolve, reject) => {
            const newItem = firebase.database().ref(ref).push()
            item._id = newItem.key
            newItem.set(item)
            resolve(item)
        })
        return prom
    }

    static attach(option) {
        
    }
}