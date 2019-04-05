import React, { Component } from 'react'

import Welcome from '../components/home/welcome/Welcome'
import HelpForm2 from '../components/helpForm2/HelpForm2'
import FlatCard from '../component1/FlatCard'
import seeFlats from '../services/seeFlatsNews'
import Advice from '../components/home/advice/Advice'
import {Link} from 'react-router-dom'
import './home.css'


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

        <div >
                    <Link className="flat-type3" to={"/buy"}>Ver todas las viviendas</Link>
                    </div>
                    <br></br>
                    <br></br>

        {Array.isArray(this.state.pisos) ? this.state.pisos.map((piso, index) => <FlatCard key={index} flat={piso} />) : null}

      </div>

    )

  }

}

export default Home;