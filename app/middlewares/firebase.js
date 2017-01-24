import is from 'is_js'
import firebaseAPI from '../utils/db/firebaseAPI'

export default store => next => action => {
    next(action)

    const { database, ...rest } = action
    if (is.not.empty(database)
        && is.not.null(database)
        && is.not.undefined(database)
    ) {
        const { name, method, isSocket, ...options } = database
        // not call socket
        if ( (is.null(isSocket) || is.empty(isSocket) || is.undefined(isSocket)) 
            && isSocket
        ) {
            firebaseAPI[method](options).then(snap => {
                cb(snap.val())
            })
        }
        // call socket
        else {
            firebaseAPI[method](options)
        }
    }
}