import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <form>
                <h2>Login</h2>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="password" />
            </form>
        )
    }
}