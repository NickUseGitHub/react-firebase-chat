import React, { Component } from 'react'
import { connect } from 'react-redux'
import is from 'is_js'
import firebase from '../lib/firebase/app'

//action creator
import { initFirebaseDb } from '../actions/firebase-db'

//Components
import RoomList from './RoomList'

class IndexPage extends Component {

    componentWillMount() {
        const { initFirebaseDb } = this.props
        initFirebaseDb(firebase.database())
    }

    render() {
        return (
            <div className="row">
                <div className="jumbotron"><h1>Hello {this.props.member.name}</h1></div>
                <RoomList />
                {this.props.children}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        member: state.member,
        firebaseDB: state.firebaseDB
    }
}

export default connect(mapStateToProps, { initFirebaseDb })(IndexPage)