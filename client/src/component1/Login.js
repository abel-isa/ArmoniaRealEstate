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
    
            <div className="container login-div">
			    <div>Editar<span>Contenido</span></div>
                
                <div className="row">
                    <div className="col-sm-12">
                        <form onSubmit={this.handleFormSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" name="username" className="form-control" value={this.state.username} onChange={e => this.handleChange(e)} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input name="password" className="form-control" value={this.state.password} onChange={e => this.handleChange(e)} />
                            </div>
                            <input type="submit" value="Login" className="btn btn-outline-dark" />
                        </form>

                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Login


