import React, { Component } from 'react'

import FlatDetails from '../component1/FlatDetails'
import Footer from '../components/footer/Footer'




class FlatInfo extends Component {

  render() {
    console.log(this.props)
    return (

      <div>

          <FlatDetails {...this.props}/>

          <Footer/>


      </div>

    )

  }

}

export default FlatInfo;