import firebaseAPI from '../utils/db/firebaseAPI'

export default store => next => action => {
    next(action)

    const { type, payload } = action
    if (type === 'MESSAGES_ATTACHED') {
        const { selected_room, cb } = payload
        const ref = `/messages/${selected_room._id}`
        firebaseAPI.attach(ref, cb)
    }
}