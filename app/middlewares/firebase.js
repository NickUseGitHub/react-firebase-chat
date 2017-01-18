export default store => next => action => {
    console.log('trigger firebase middlewares')
    next(action)
}