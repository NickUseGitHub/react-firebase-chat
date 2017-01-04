import React, { Component } from 'react'
import { connect } from 'react-redux'
import is from 'is_js'

class IndexPage extends Component {
    render() {
        return <div>Hello {this.props.member.username} {this.props.member.password} </div>
    }
}

function mapStateToProps(state) {
    return {
        member: state.member
    }
}

export default connect(mapStateToProps)(IndexPage)