import React, { Component } from 'react'
import { initDb } from '../lib/database/db'

//Component
import Messages from './chatrooms/Messages'
import TextBox from './chatrooms/TextBox'

export default class ChatRoom extends Component {

    db = null

    componentDidMount() {
        this.db = initDb('/todos')
        this.addTodo({name: "Hey jing di"})
    }

    addTodo(item) {
        this.db.add(item)
    }

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