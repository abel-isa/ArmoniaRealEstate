import React, { Component } from 'react'
import AddFlat from '../component1/AddFlat'
import Footer from '../components/footer/Footer'


class AddFlatAdmin extends Component {

    render() {
  
      return (
  
        <div>
               
            
        <AddFlat logout={this.props.logout}/>

        <Footer/>

  
        </div>
  
      )
  
    }
  
  }


export default AddFlatAdmin
