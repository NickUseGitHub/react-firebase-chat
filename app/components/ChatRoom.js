import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'
import firebaseAPI from '../utils/db/firebaseAPI'

//action
import { attachMessage, changeMessage } from '../actions/message'
import { selectRoom } from '../actions/chatroom'

//Component
import Messages from './chatrooms/Messages'
import TextBox from './chatrooms/TextBox'


class ChatRoom extends Component {

    ref = null
    
    componentDidMount() {
        const { onAttachMessage, changeMessage, selected_room } = this.props
        // this.ref = `/messages/${selected_room._id}`
        // firebaseAPI.attach({ref: this.ref, cb: (snap) => changeMessage({snap}) })
        onAttachMessage(selected_room)
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
        selected_room: state.selected_room
    }
}

function mapActionToProps(dispatch) {
    return { 
        onAttachMessage: attachMessage(dispatch), 
        changeMessage, 
        selectRoom 
    }
}

export default connect(mapStateToProps, mapActionToProps)(ChatRoom)