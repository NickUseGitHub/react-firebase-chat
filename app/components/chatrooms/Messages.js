import React, { Component } from 'react'
import is from 'is_js'
import { connect } from 'react-redux'
import { initDb } from '../../lib/database/db'

class Messages extends Component {

    // db = initDb(`/messages/${room.name}`)
    componentDidMount() {
        console.log(this.props.selected_room)
    }

    renderMessage() {
        if (is.empty(this.props.messages)) {
            return <li>no message</li>
        }

        return this.props.messages.map(message => <li><span className="label label-success">{message.user.name}</span> {message.detail}</li>)
    }
    
    render() {
        return (
            <div className="message-list">
                <ul className="messages-list">
                    {this.renderMessage()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
        selected_room: state.selected_room
    }
}

export default connect(mapStateToProps)(Messages)