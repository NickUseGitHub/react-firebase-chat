import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'
import { changeMessage } from '../actions/message'

//Component
import Messages from './chatrooms/Messages'
import TextBox from './chatrooms/TextBox'

class ChatRoom extends Component {

    db = null
    
    constructor(props) {
        super(props)
        this.createDb(props)
        this.attachFirebase()
    }

    createDb(props) {
        const { firebaseDB, selected_room } = props
        this.db = initDb(firebaseDB.ref(`/messages/${selected_room.name}`))
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
        this.attachFirebase()
    }

    componentUnMount() {
        this.detachFirebase()
    }

    render() {
        const { selected_room } = this.props

        return (
            <div className="col-xs-8 chatroom">
                <h2>{selected_room.name}</h2>
                <div className="row">
                    <Messages />
                    <TextBox db={this.db} />
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

export default connect(mapStateToProps, { changeMessage })(ChatRoom)