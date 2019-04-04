import React, { Component } from 'react'
import seeFlats from '../services/seeFlatsNews'
import Welcome from '../components/home/welcome/Welcome'
import FlatCard from '../component1/FlatCard'


class Buy extends Component {
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

      <div>

      <Welcome />

      {this.state.pisos.map((piso, index) => <FlatCard key={index} flat={piso} />)}




      </div>

    )

  }

}

export default Buy;