import React, { Component } from 'react'
import { connect } from 'react-redux'
import is from 'is_js'

//Components
import RoomList from './RoomList'

class IndexPage extends Component {
    render() {
        return (
            <div className="row">
                <div className="jumbotron"><h1>Hello {this.props.member.name}</h1></div>
                <RoomList />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        member: state.member
    }
}

export default connect(mapStateToProps)(IndexPage)