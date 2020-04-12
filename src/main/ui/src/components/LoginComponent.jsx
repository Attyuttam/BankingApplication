import React, { Component } from 'react'
import AuthenticationService from '../services/AuthenticationService';
import HomePage from "./HomePage";
import * as loginAction from '../actions/loginActions';
class LoginComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }

    loginClicked() {
        AuthenticationService
            .executeJwtAuthenticationService(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                //console.log("SESSION TOKEN: "+sessionStorage.getItem("token"));
                loginAction.login_logout();
                this.props.history.push(`/home`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })
    }

    render() {
        if(AuthenticationService.isUserLoggedIn()){
            return <HomePage/>;
        }
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /> <br/><br/><br/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <br/><br/>
                    <button className="btn btn-primary" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent