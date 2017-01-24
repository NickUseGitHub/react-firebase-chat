export default store => next => action => {
    next(action)

    const { type } = action
    if (type === 'MESSAGES_ATTACHED') {
        console.log("Hello Test middle ware")
    }
}