import React, { Component } from 'react'
import { Link } from 'react-router'

export default class RoomList extends Component {
    render() {
        return (
            <div className="col-xs-4 room-list">
                <ul className="room-list">
                    <li><Link to="/chatRoom1">Room 1</Link></li>
                    <li><Link to="/chatRoom2">Room 2</Link></li>
                    <li><Link to="/chatRoom3">Room 3</Link></li>
                    <li><Link to="/chatRoom4">Room 4</Link></li>
                </ul>
            </div>
        )
    }
}