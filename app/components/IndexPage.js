import React, { Component } from 'react'
import { connect } from 'react-redux'
import is from 'is_js'
import firebase from 'firebase/app'

//action creator
import { selectRoom } from '../actions/rooms'

//Components
import RoomList from './RoomList'
import RoomTools from './RoomTools'

class IndexPage extends Component {

    componentWillMount() {
        const { params, selectRoom } = this.props
        const { chatRoomId } = params
        selectRoom(chatRoomId)
    }

    render() {
        return (
            <div className="row">
                <div className="jumbotron"><h1>Hello {this.props.member.name}</h1></div>
                <RoomTools />
                <RoomList />
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        member: state.member
    }
}

export default connect(mapStateToProps, { selectRoom })(IndexPage)