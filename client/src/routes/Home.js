import React, { Component } from 'react'

import Welcome from '../components/home/welcome/Welcome'
import FlatCard from '../component1/FlatCard'
import seeFlats from '../services/seeFlats'
import HelpForm2 from '../components/helpForm2/HelpForm2'



class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pisos: []
    }
    this.prueba = new seeFlats()
    this.prueba.getFlat()
      .then(data => this.setState({ ...this.state, pisos: data }))
  }

  render() {

    return (

      <div style={{ height: '100%' }}>

        <Welcome />

        {this.state.pisos.map((piso, index) => <FlatCard key={index} flat={piso} />)}

        <HelpForm2 />


      </div>

    )

  }

}

export default Home;