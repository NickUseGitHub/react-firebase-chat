import is from 'is_js'
import firebaseAPI from '../utils/db/firebaseAPI'

export default store => next => action => {
    next(action)

    const { type, payload } = action
    const { database, ...rest } = payload
    
    if (type === 'MESSAGES_ATTACHED') {
        const { selected_room, cb } = payload
        const ref = `/messages/${selected_room._id}`
        firebaseAPI.attach(ref, cb)
    }

    if (is.not.empty(database) 
    && is.not.undefined(database)) {
        const { method, options } = database
        firebaseAPI[method](options).then(snap => {
            next({type, payload: {snap, ...rest} })
        })
    }
}