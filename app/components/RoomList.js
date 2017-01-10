import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'
import { Link } from 'react-router'

//actions
import { selectRoom } from '../actions/chatroom'
import { initRooms } from '../actions/rooms'

class RoomList extends Component {

    db = null

    constructor(props) {
        super(props)
        this.createDB(props)
    }

    createDB(props) {
        const { firebaseDB } = props
        this.db = initDb(firebaseDB.ref('/Rooms'))
        console.log("RoomList constructor", this.db)
    }

    componentDidMount() {
        const { initRooms } = this.props
        this.db.getDbObj().on('value', snap => initRooms(Object.values(snap.val())))
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
                    {rooms.map(room => <li key={room._id} onClick={this.selectRoom(room)} ><Link to={`/${room.name}`}>{room.name}</Link></li>)}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rooms: state.rooms,
        firebaseDB: state.firebaseDB
    }
}

export default connect(mapStateToProps, { selectRoom, initRooms })(RoomList)