import React, { Component } from 'react'

export default class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    onInputchange = (type) => (e) => {
        const value = e.target.value
        this.setState({
            [type]: value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Login</h2>
                <input type="text" placeholder="Username" onChange={this.onInputchange('username')} value={this.state.username} />
                <input type="password" placeholder="Password"  onChange={this.onInputchange('password')} value={this.state.password} />
                <button>Submit</button>
            </form>
        )
    }
}