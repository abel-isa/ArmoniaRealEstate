import React, { Component } from 'react'

import FlatDetails from '../component1/FlatDetails'



class FlatInfo extends Component {

  render() {
    console.log(this.props)
    return (

      <div>

          <FlatDetails {...this.props}/>

      </div>

    )

  }

}

export default FlatInfo;