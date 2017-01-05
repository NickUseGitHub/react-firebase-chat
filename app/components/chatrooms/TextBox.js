import React, { Component } from 'react'

export default class TextBox extends Component {
    state = {
        message: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
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