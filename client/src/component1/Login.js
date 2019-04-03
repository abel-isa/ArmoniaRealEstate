import React, { Component } from 'react'

import AuthService from '../services/authService'

import './Login.css'




class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' }
        this.service = new AuthService();
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const username = this.state.username;
        const password = this.state.password;
        this.props.getLogin(username, password)
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div id="login-main">

                <div id="login-div">

                        <form className="login" id="login1" onSubmit={this.handleFormSubmit}>

                            <h3 className="login-tittle">Editar contenido</h3>

                            <p className="login-name">
                                <input name="username" type="text" className="feedback-input" placeholder="Username" id="login-name" value={this.state.username} onChange={e => this.handleChange(e)} />
                            </p>

                            <p>
                                <input name="password" type="password" className="feedback-input" placeholder="Password" id="login-password" value={this.state.password} onChange={e => this.handleChange(e)} />
                            </p>

                            <div className="login-submit">
                                <input type="submit" value="Login" id="login-button-blue"/>
                                <div className="login-ease"></div>
git                            </div>

                        </form>
                    
                </div>

            </div>
        )
    }
}

export default Login;




{/* <div className="container">

<h1>Editar contenido</h1>

<div className="row">

    <div className="col-sm-12">

        <form onSubmit={this.handleFormSubmit}>

            <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" className="form-control" value={this.state.username} onChange={e => this.handleChange(e)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <textarea name="password" className="form-control" value={this.state.password} onChange={e => this.handleChange(e)} />
            </div>

            <input type="submit" value="Login" className="btn btn-outline-dark" />
        </form>

    </div>
    
</div>

</div> */}
