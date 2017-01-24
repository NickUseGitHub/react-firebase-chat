import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'
import { Link } from 'react-router'
import is from 'is_js'

//actions
import { attachRooms, selectRoom } from '../actions/rooms'

class RoomList extends Component {

    ref = '/Rooms'

    componentDidMount() {
        const { initRooms, onAttachRooms } = this.props
        onAttachRooms(this.ref)
    }

    selectRoom = (room) => () => {
        const { selectRoom } = this.props
        selectRoom(room._id)
    }

    render() {
        const { rooms } = this.props
        const renderRoom = rooms => {
            if (is.empty(rooms)
                || is.null(rooms)
                || is.undefined(rooms)
            ) {
                return <li>loading...</li>
            }

            return rooms.map(room => <li onClick={this.selectRoom(room)} key={room._id}><Link to={`/${room._id}`}>{room.name}</Link></li>)
        }

        return (
            <div className="col-xs-4 room-list">
                <ul className="room-list">
                    {renderRoom(rooms)}
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

function mapActionsToProps(dispatch) {
    return { 
        onAttachRooms: attachRooms(dispatch),
        selectRoom: room_id => dispatch(selectRoom(room_id))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(RoomList)