import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeMessage } from '../../actions/message'

class TextBox extends Component {
    state = {
        message: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { message } = this.state
        const { member } = this.props
        const message_for_add = { detail: message, member }

        // db.add(message_for_add).then(msg => {
        //     this.setState({ message: '' })
        // })
    }

    handleTextChange = (e) => {
        let message = e.target.value
        this.setState({message})
    }

    render() {
        return (
            <div className="input-message">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleTextChange} value={this.state.message} />
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        member: state.member,
        selected_room: state.selected_room
    }
}

export default connect(mapStateToProps, { changeMessage })(TextBox)