import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'
import { Link } from 'react-router'
import firebase from 'firebase/app'

//actions
import { initRooms } from '../actions/rooms'
import { selectRoom } from '../actions/chatroom'

class RoomList extends Component {

    db = null

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { initRooms } = this.props
        firebase.database().ref('/Rooms').on('value', snap => initRooms(Object.values(snap.val())))
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

export default connect(mapStateToProps, { initRooms, selectRoom })(RoomList)