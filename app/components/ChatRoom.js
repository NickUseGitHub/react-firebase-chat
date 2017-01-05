import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'

//Component
import Messages from './chatrooms/Messages'
import TextBox from './chatrooms/TextBox'

class ChatRoom extends Component {
    render() {
        const { room } = this.props

        return (
            <div className="col-xs-8 chatroom">
                <h2>{room.name}</h2>
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
        room: state.selected_room
    }
}

export default connect(mapStateToProps)(ChatRoom)