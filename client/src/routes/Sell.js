import React, { Component } from 'react'

import TheNavbar from "../components/navbar/TheNavbar"
import SalesHeader from "../components/sales/salesHeader/SalesHeader"
import SalesSteps from "../components/sales/salesSteps/SalesSteps"
import Footer from '../components/footer/Footer'
import AddNews from '../component1/AddNews';



class Sell extends Component {

  render() {

    return (

      <div>

        <TheNavbar/>

        <SalesHeader/>

        <SalesSteps/>

        <Footer/>

        <AddNews/>

      </div>

    )

  }

}

export default Sell;