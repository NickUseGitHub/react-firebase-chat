import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'
import { changeMessage } from '../actions/message'

//Component
import Messages from './chatrooms/Messages'
import TextBox from './chatrooms/TextBox'

class ChatRoom extends Component {

    db = initDb(`/messages/${this.props.selected_room.name}`)

    componentDidMount() {
        this.db.getDbObj().once('value').then(snap => changeMessage(snap.val()) )
        console.log("ChatRoom Component:", this.db)
    }

    componentDidUpdate() {
        this.db = initDb(`/messages/${this.props.selected_room.name}`)
        console.log("ChatRoom Component:", this.db)
    }

    render() {
        const { selected_room } = this.props

        return (
            <div className="col-xs-8 chatroom">
                <h2>{selected_room.name}</h2>
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
        selected_room: state.selected_room
    }
}

export default connect(mapStateToProps, { changeMessage })(ChatRoom)