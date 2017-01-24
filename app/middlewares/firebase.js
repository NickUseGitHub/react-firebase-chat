import is from 'is_js'
import firebaseAPI from '../utils/db/firebaseAPI'

export default store => next => action => {
    next(action)

    const { database, ...rest } = action
    if (is.not.empty(database)
        || is.not.null(database)
        || is.not.undefined(database)
    ) {
        const { name, method, isSocket, ref } = database
        console.log("database - name", name)
        console.log("database - method", method)
        console.log("database - isSocket", isSocket)
        console.log("database - ref", ref)
    }
    
    // const { type, payload } = action
    // if (type === 'MESSAGES_ATTACHED') {
    //     const { selected_room, cb } = payload
    //     const ref = `/messages/${selected_room._id}`
    //     firebaseAPI.attach(ref, cb)
    // }

    // if (is.not.empty(database) 
    // && is.not.undefined(database)) {
    //     const { method, options } = database
    //     firebaseAPI[method](options).then(snap => {
    //         next({type, payload: {snap, ...rest} })
    //     })
    // }
}