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
        selected_room: state.selected_room
    }
}

export default connect(mapStateToProps, { changeMessage, selectRoom })(ChatRoom)