import firebaseAPI from '../utils/db/firebaseAPI'

export default store => next => action => {
    const { database, type, ...rest } = action
    if (!database) {
        return next(action)
    }

    const { name, method, isSocket, ...options } = database
    // not call socket
    if (!isSocket) {
        const { key } = options

        firebaseAPI[method](options).then(result => {
            return next({...rest, type, payload: {[key]: result}})
        })
    }
    // call socket
    else {
        firebaseAPI[method](options)
    }
}