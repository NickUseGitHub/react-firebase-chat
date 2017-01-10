import React, {Component} from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'

class RoomTools extends Component {

    state = {
        roomName: ''
    }

    db = null

    constructor(props) {
        super(props)
        this.createDB(props)
    }

    createDB(props) {
        const { firebaseDB } = props
        this.db = initDb(firebaseDB.ref('/Rooms'))
    }

    handleInputChange = type => e => this.setState({ [type]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        const { member } = this.props
        const room = { name : this.state.roomName , member }
        this.db.add(room).then(res => {
            this.setState({roomName: ''})
        })
    } 

    render() {
        return (
            <div className="tools">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInputChange('roomName')} value={this.state.roomName} />
                    <button className="btn btn-success btn-xs">add +</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        firebaseDB: state.firebaseDB,
        member: state.member
    }
}

export default connect(mapStateToProps)(RoomTools);