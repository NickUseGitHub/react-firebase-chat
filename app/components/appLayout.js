import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import is from 'is_js'

//Component
import Login from './Login'
import IndexPage from './IndexPage'

class AppLayout extends Component {
    choseComponent() {
        if (is.empty(this.props.member)
            || is.null(this.props.member)) {
                return <Login />
            }

        return <IndexPage />
    }

    render() {
        return (
            <div className="container">
                {this.choseComponent()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        member: state.member
    }
}

export default connect(mapStateToProps)(AppLayout)