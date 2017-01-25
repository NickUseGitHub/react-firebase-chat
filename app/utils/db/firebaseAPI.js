import firebase from 'firebase/app'
import is from 'is_js'

function convertValue(result_type, result) {
    if (is.empty(result_type)
    || is.undefined(result_type)
    || is.null(result_type)) {
        return result
    }

    if (result_type !== 'list') {
        return result
    }

    const newResult = []
    Object.keys(result).forEach( result_key => newResult.push(result[result_key]) )
    
    return newResult
}

export default class firebaseAPI {
    static add(options) {

        const { item, ref } = options

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

    static set(options, item) {
        const { ref } = options
        const prom = new Promise((resolve, reject)=>{
            firebase.database().ref(ref).set(item)
            resolve(item)
        })
        return prom
    }

    static attach(options) {
        const { cb, ref, result_type } = options

        firebase.database().ref(ref).on('value', snap => {
            cb(convertValue(result_type, snap.val()))
        })
    }

    static distach(options) {
        const { ref } = options
        firebase.database().ref(ref).off()
    }
}