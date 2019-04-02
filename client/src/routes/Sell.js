import React, { Component } from 'react'

import SalesHeader from "../components/sales/salesHeader/SalesHeader"
import SalesSteps from "../components/sales/salesSteps/SalesSteps"



class Sell extends Component {

  render() {

    return (

      <div>

        <SalesHeader/>

        <SalesSteps/>

      </div>

    )

  }

}

export default Sell;