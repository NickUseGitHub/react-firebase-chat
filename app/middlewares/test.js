import firebaseAPI from '../utils/db/firebaseAPI'

export default store => next => action => {
    next(action)

    const { type, payload } = action
    if (type === 'MESSAGES_ATTACHED') {
        const { cb, selected_room } = payload
        const ref = `/messages/${selected_room._id}`
        console.log("ref", ref)
        firebaseAPI.attach({ref, cb})
    }
}