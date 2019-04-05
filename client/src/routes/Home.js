import React, { Component } from 'react'

import Welcome from '../components/home/welcome/Welcome'
import HelpForm2 from '../components/helpForm2/HelpForm2'
import FlatCard from '../component1/FlatCard'
import seeFlats from '../services/seeFlatsNews'
import Advice from '../components/home/advice/Advice'
import Footer from '../components/footer/Footer'



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

        <HelpForm2 />

        <Advice />

        {Array.isArray(this.state.pisos) ? this.state.pisos.map((piso, index) => <FlatCard key={index} flat={piso} />) : null}

        <Footer/>

      </div>

    )

  }

}

export default Home;