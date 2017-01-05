import React, { Component } from 'react'

export default class Messages extends Component {
    render() {
        return (
            <div className="message-list">
                <ul className="messages-list">
                    <li>message1</li>
                    <li>message2</li>
                    <li>message3</li>
                    <li>message4</li>
                </ul>
            </div>
        )
    }
}