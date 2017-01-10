import React, { Component } from 'react'
import { connect } from 'react-redux'
import is from 'is_js'
import firebase from '../lib/firebase/app'

//action creator
import { initDb } from '../actions/db'

//Components
import RoomList from './RoomList'

class IndexPage extends Component {

    componentWillMount() {
        const { initDb } = this.props
        initDb(firebase.database())
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

export default connect(mapStateToProps, { initDb })(IndexPage)