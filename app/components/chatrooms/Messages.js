import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeMessage } from '../../actions/message'

class Messages extends Component {

    renderMessage() {
        const { messages } = this.props
        if (!messages) {
            return <li>no message</li>
        }

        return messages.map(message => <li key={message._id}><span className="label label-success">{message.member.name}</span> {message.detail}</li>)
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

export default connect(mapStateToProps, { changeMessage })(Messages)