import firebase from 'firebase/app'
import is from 'is_js'

export default class firebaseAPI {
    static add(options, item) {

        const { ref } = options

        const prom = new Promise((resolve, reject) => {
            const newItem = firebase.database().ref(ref).push()
            item._id = newItem.key
            newItem.set(item)
            resolve(item)
        })
        return prom
    }

    static get(options) {
        const { ref } = options

        const prom = new Promise((resolve, reject)=>{
            firebase.database().ref(ref).once('value').then(snap=>{
                resolve(snap.val())
            })
        })
        
        return prom
    }

    static set(item, options) {
        const { ref } = options
        const prom = new Promise((resolve, reject)=>{
            firebase.database().ref(ref).set(item)
            resolve(item)
        })
        return prom
    }

    static attach(options) {
        const { ref, action } = options
        firebase.database().ref(ref).on('value', action)
    }

    static distach(options) {
        const { ref } = options
        firebase.database().ref(ref).off()
    }
}