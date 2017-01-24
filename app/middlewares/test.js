export default store => next => action => {
    next(action)

    const { type, payload } = action
    if (type === 'MESSAGES_ATTACHED') {
        const { cb } = payload
        setInterval(function(){
            cb()
        }, 2000)
    }
}