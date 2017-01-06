import React, { Component } from 'react'
import is from 'is_js'
import { connect } from 'react-redux'
import { changeMessage } from '../../actions/message'

class Messages extends Component {

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

export default connect(mapStateToProps, { changeMessage })(Messages)