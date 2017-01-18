import is from 'is_js'
import firebaseAPI from '../utils/db/firebaseAPI'

export default store => next => action => {
    next(action)

    const { type, payload } = action
    const { database, ...rest } = payload
    
    if (is.not.empty(database) 
    && is.not.undefined(database)) {
        const { method, options } = database
        firebaseAPI[method](options).then(snap => {
            next({type, payload: {snap, ...rest} })
        })
    }
}