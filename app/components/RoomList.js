import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'
import { Link } from 'react-router'
import firebaseAPI from '../utils/db/firebaseAPI'

//actions
import { attachRooms, initRooms } from '../actions/rooms'
import { selectRoom } from '../actions/chatroom'

class RoomList extends Component {

    ref = '/Rooms'

    componentDidMount() {
        const { initRooms } = this.props
        firebaseAPI.attach({ref: this.ref, action: (snap) => initRooms({snap}) })
    }

    connectData() {
        const database = {
            method: 'get',
            options : {ref: this.ref}
        }
        initRooms({database})
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

export default connect(mapStateToProps, { attachRooms, initRooms, selectRoom })(RoomList)