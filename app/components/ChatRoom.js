import React, { Component } from 'react'
import firebase from '../lib/firebase/app'

//Component
import Messages from './chatrooms/Messages'
import TextBox from './chatrooms/TextBox'

export default class ChatRoom extends Component {

    componentDidMount() {
        console.log("componentDidMount()")
        this.addTodo({name: "Hello world"})
    }

    addTodo(item) {
        var todo = {
            name: item.name
        }
        
        var newTodoKey = firebase.database().ref('/todos').push().key
        var updates = {}
        updates['/todos/' + newTodoKey] = todo
        firebase.database().ref().update(updates)
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