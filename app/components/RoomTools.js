import React, {Component} from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'

class RoomTools extends Component {

    db = null

    initDB(props) {
        const { initDb, firebaseDB } = props
        this.db = initDb(firebaseDB.ref('/Rooms'))
    }

    render() {
        return (
            <div className="tools">
                <input type="text" />
                <button className="btn btn-success btn-xs">add +</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        firebaseDB: state.firebaseDB
    }
}

export default connect(mapStateToProps, { initDb })(RoomTools);