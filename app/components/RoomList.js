import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class RoomList extends Component {
    render() {
        const { rooms } = this.props

        return (
            <div className="col-xs-4 room-list">
                <ul className="room-list">
                    {rooms.map(room => <li key={room.id} ><Link to={`/${room.name}`}>{room.name}</Link></li>)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rooms: state.rooms
    }
}

export default connect(mapStateToProps)(RoomList)