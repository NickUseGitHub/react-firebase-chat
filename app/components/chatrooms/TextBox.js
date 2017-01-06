import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage, changeMessage } from '../../actions/message'

class TextBox extends Component {
    state = {
        message: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { message } = this.state
        const { member, addMessage } = this.props

        addMessage({ detail: message, member })
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
        selected_room: state.selected_room
    }
}

export default connect(mapStateToProps, { addMessage, changeMessage })(TextBox)