import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'
import { Link } from 'react-router'
import is from 'is_js'

//actions
import { attachRooms, selectRoomId } from '../actions/rooms'

class RoomList extends Component {

    ref = '/Rooms'

    componentDidMount() {
        const { initRooms, onAttachRooms } = this.props
        onAttachRooms(this.ref)
    }

    selectRoomId = (room) => () => {
        const { selectRoomId } = this.props
        selectRoomId(room._id)
    }

    render() {
        const { rooms, selected_room_id } = this.props
        const renderRoom = (rooms) => {
            if (is.empty(rooms)
                || is.null(rooms)
                || is.undefined(rooms)
            ) {
                return <li>loading...</li>
            }
            const btnClass = (room) => room._id == selected_room_id? 'btn btn-xs btn-success' : 'btn btn-xs btn-default'

            return rooms.map(room => <li key={room._id}><button className={btnClass(room)} onClick={this.selectRoomId(room)}><Link to={`/${room._id}`}>{room.name}</Link></button></li>)
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
        rooms: state.rooms,
        selected_room_id: state.selected_room_id
    }
}

function mapActionsToProps(dispatch) {
    return { 
        onAttachRooms: attachRooms(dispatch),
        selectRoomId: room_id => dispatch(selectRoomId(room_id))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(RoomList)