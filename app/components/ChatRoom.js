import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'

//action
import { changeMessage } from '../actions/message'
import { selectRoom } from '../actions/chatroom'

//Component
import Messages from './chatrooms/Messages'
import TextBox from './chatrooms/TextBox'


class ChatRoom extends Component {

    db = null
    
    constructor(props) {
        super(props)
        this.createDb(props)
        this.initRoom(props)
        // this.attachFirebase()
    }

    initRoom(props) {
        const { selectRoom, params } = props
        const { chatRoomId } = params
        // const db = initDb(firebaseDB.ref(`/Rooms/${chatRoomId}`))
        // db.getDbObj().once('value').then(snap => selectRoom(snap.val()))
    }

    createDb(props) {
        const { params } = props
        const { chatRoomId } = params
        // this.db = initDb(firebaseDB.ref(`/messages/${chatRoomId}`))
    }

    attachFirebase() {
        const { changeMessage } = this.props
        this.db.getDbObj().on('value', snap => {
            const messages = snap.val() ? Object.values(snap.val()) : []
            changeMessage(messages)
        })
    }

    detachFirebase() {
        this.db.detachEventListener()
    }

    componentWillUpdate(nextProps, nextState) {
        const { changeMessage } = this.props
        changeMessage([])
        this.detachFirebase()
        this.createDb(nextProps)
        // this.attachFirebase()
    }

    componentUnMount() {
        this.detachFirebase()
    }

    render() {
        const { selected_room } = this.props

        return (
            <div className="col-xs-8 chatroom">
                <h2>{ selected_room? selected_room.name : 'loading...' }</h2>
                <div className="row">
                    <Messages />
                    <TextBox />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        firebaseDB: state.firebaseDB,
        selected_room: state.selected_room
    }
}

export default connect(mapStateToProps, { changeMessage, selectRoom })(ChatRoom)