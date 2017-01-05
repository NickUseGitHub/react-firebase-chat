import React, { Component } from 'react'
import is from 'is_js'
import { connect } from 'react-redux'

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
        messages: state.messages
    }
}

export default connect(mapStateToProps)(Messages)