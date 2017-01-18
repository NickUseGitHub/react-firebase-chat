import firebase from 'firebase/app'

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

    static get(option) {
        const { ref } = option
        return firebase.database().once('value')
    }

    static attach(option) {
        const { ref, callback } = option
        firebase.database().ref(ref).on('value', callback)
    }

    static distach(option) {
        const { ref } = option
        firebase.database().ref(ref).off()
    }
}