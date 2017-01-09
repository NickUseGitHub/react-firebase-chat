import React, { Component } from 'react'
import { connect } from 'react-redux'
import { initDb } from '../lib/database/db'
import { changeMessage } from '../actions/message'

//Component
import Messages from './chatrooms/Messages'
import TextBox from './chatrooms/TextBox'

class ChatRoom extends Component {

    db = null
    
    constructor(props) {
        super(props)
        this.db = initDb(`/messages/${this.props.selected_room.name}`)
        console.log("constructor() -- db", this.db)
        console.log("constructor() -- db", this.props)
        this.attachFirebase()
    }

    attachFirebase() {
        // console.log("attachFirebase()")
        const { changeMessage } = this.props
        this.db.getDbObj().on('value', snap => {
            console.log("What")
            const messages = snap.val() ? Object.values(snap.val()) : []
            changeMessage(messages)
        })
    }

    detachFirebase() {
        this.db.getDbObj().off()
    }

    componentWillUpdate() {
        const { changeMessage } = this.props
        changeMessage([])
        this.detachFirebase()
    }

    componentDidUpdate() {
        this.db = initDb(`/messages/${this.props.selected_room.name}`)
        console.log("componentDidMount() -- db", this.db)
        this.attachFirebase()
    }

    render() {
        const { selected_room } = this.props

        return (
            <div className="col-xs-8 chatroom">
                <h2>{selected_room.name}</h2>
                <div className="row">
                    <Messages db={this.db} />
                    <TextBox db={this.db} />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        selected_room: state.selected_room
    }
}

export default connect(mapStateToProps, { changeMessage })(ChatRoom)