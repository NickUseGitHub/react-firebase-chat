import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'
import { Link } from 'react-router'
import firebaseAPI from '../utils/db/firebaseAPI'

//actions
import { attachRooms, selectRoom } from '../actions/rooms'

class RoomList extends Component {

    ref = '/Rooms'

    componentDidMount() {
        const { initRooms, onAttachRooms } = this.props
        console.log("RoomList - componentDidMount")
        onAttachRooms(this.ref)
    }

    selectRoom = (room) => () => {
        const { selectRoom } = this.props
        selectRoom(room)
    }

    render() {
        const { rooms } = this.props

        return (
            <div className="col-xs-4 room-list">
                <ul className="room-list">
                    {rooms.map(room => <li onClick={this.selectRoom(room)} key={room._id}><Link to={`/${room._id}`}>{room.name}</Link></li>)}
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
        selectRoom 
    }
}

export default connect(mapStateToProps, mapActionsToProps)(RoomList)