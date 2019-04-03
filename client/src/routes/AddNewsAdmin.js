import React, { Component } from 'react'
import AddNews from '../component1/AddNews'

class AddNewsAdmin extends Component {

    render() {
  
      return (
  
        <div>
               
            
        <AddNews logout={this.props.logout}/>
  
        </div>
  
      )
  
    }
  
  }


export default AddNewsAdmin
