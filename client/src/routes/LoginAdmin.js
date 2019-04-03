
import React, { Component } from 'react'
import Login from '../component1/Login'







class LoginAdmin extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render() {

    return (

      <div>
             
          
        <Login getLogin={this.props.getLogin}/>

      </div>

    )

  }

}

export default LoginAdmin;