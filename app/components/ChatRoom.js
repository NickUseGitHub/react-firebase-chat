import React, { Component } from 'react'

//Component
import Messages from './chatrooms/Messages'
import TextBox from './chatrooms/TextBox'

export default class ChatRoom extends Component {
    render() {
        return (
            <div className="col-xs-8 chatroom">
                <h2>{this.props.params.chatRoomName}</h2>
                <div className="row">
                    <Messages />
                    <TextBox />
                </div>
            </div>
        )
    }
}