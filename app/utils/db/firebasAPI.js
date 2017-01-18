import firebase from 'firebase/app'
import is from 'is_js'

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
        const { ref, type } = option

        const prom = new Promise((resolve, reject)=>{
            firebase.database().ref(ref).once('value').then(snap=>{
                resolve(snap.val())
            })
        })
        
        return prom
    }

    static attach(option) {
        const { ref, action } = option
        firebase.database().ref(ref).on('value', action)
    }

    static distach(option) {
        const { ref } = option
        firebase.database().ref(ref).off()
    }
}