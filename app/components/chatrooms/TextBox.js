import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../../actions/message'

class TextBox extends Component {
    state = {
        message: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { message } = this.state
        const { addMessage, member, selected_room_id } = this.props
        const message_for_add = { detail: message, member },
              ref = `/messages/${selected_room_id}`

        addMessage(message_for_add, ref)
        this.setState({ message: '' })
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
        selected_room_id: state.selected_room_id
    }
}

export default connect(mapStateToProps, { addMessage })(TextBox)