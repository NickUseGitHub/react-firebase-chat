import React, { Component } from 'react'

export default class ChatRoom extends Component {
    render() {
        return (
            <div className="col-xs-8 chatroom">
                <h2>{this.props.params.chatRoomName}</h2>
            </div>
        )
    }
}