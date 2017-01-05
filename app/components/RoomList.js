import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initRoom } from '../actions/chatroom'
import { Link } from 'react-router'

class RoomList extends Component {

    selectRoom = (room) => () => {
        const { initRoom } = this.props
        initRoom(room)
    }

    render() {
        const { rooms } = this.props

        return (
            <div className="col-xs-4 room-list">
                <ul className="room-list">
                    {rooms.map(room => <li key={room.id} onClick={this.selectRoom(room)} ><Link to={`/${room.name}`}>{room.name}</Link></li>)}
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

export default connect(mapStateToProps, { initRoom })(RoomList)