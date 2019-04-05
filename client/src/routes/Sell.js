import React, { Component } from 'react'

import SalesHeader from "../components/sales/salesHeader/SalesHeader"
import SalesSteps from "../components/sales/salesSteps/SalesSteps"
import Footer from '../components/footer/Footer'




class Sell extends Component {

  render() {

    return (

      <div>

        <SalesHeader/>

        <SalesSteps/>

      <Footer/>


      </div>

    )

  }

}

export default Sell;