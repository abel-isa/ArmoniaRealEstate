import React, { Component } from 'react'
import AddFlat from '../component1/AddFlat'

class AddFlatAdmin extends Component {

    render() {
  
      return (
  
        <div>
               
            
        <AddFlat logout={this.props.logout}/>
  
        </div>
  
      )
  
    }
  
  }


export default AddFlatAdmin
