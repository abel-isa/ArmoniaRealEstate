
import React, { Component } from 'react'
import Login from '../component1/Login'
import Footer from '../components/footer/Footer'



class LoginAdmin extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render() {

    return (

      <div>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>

          
        <Login getLogin={this.props.getLogin}/>

        <Footer/>


      </div>

    )

  }

}

export default LoginAdmin;