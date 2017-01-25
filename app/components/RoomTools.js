import React, {Component} from 'react'
import { connect } from 'react-redux'

class RoomTools extends Component {

    state = {
        roomName: ''
    }

    handleInputChange = type => e => this.setState({ [type]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()
        const { member } = this.props
        const room = { name : this.state.roomName , member }
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
        member: state.member
    }
}

export default connect(mapStateToProps)(RoomTools);