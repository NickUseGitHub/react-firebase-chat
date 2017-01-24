import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'
import firebaseAPI from '../utils/db/firebaseAPI'

//action
import { attachMessage, distachMessage } from '../actions/message'

//Component
import Messages from './chatrooms/Messages'
import TextBox from './chatrooms/TextBox'


class ChatRoom extends Component {

    ref = null
    
    componentDidMount() {
        const { onAttachMessage, selected_room_id } = this.props
        onAttachMessage(selected_room_id)
    }

    componentWillUpdate(nextProps, nextState) {
        const { onDistachMessage, selected_room_id } = this.props
        onDistachMessage(selected_room_id)
    }

    componentDidUpdate(prevProps, prevState) {
        const { onAttachMessage, selected_room_id } = this.props
        onAttachMessage(selected_room_id)
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
        selected_room_id: state.selected_room_id
    }
}

function mapActionToProps(dispatch) {
    return { 
        onAttachMessage: attachMessage(dispatch),
        onDistachMessage: (selected_room_id) => dispatch(distachMessage(selected_room_id))
    }
}

export default connect(mapStateToProps, mapActionToProps)(ChatRoom)