import React, { Component } from 'react'
import AddNews from '../component1/AddNews'
import Footer from '../components/footer/Footer'


class AddNewsAdmin extends Component {

    render() {
  
      return (
  
        <div>
               
            
        <AddNews logout={this.props.logout}/>

        <Footer/>

  
        </div>
  
      )
  
    }
  
  }


export default AddNewsAdmin
