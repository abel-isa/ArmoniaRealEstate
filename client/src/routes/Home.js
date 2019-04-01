import React, { Component } from 'react'

import Toolbar from "../components/navbar/Toolbar"
import SideDrawer from "../components/sideDrawer/SideDrawer"
import Backdrop from "../components/backdrop/Backdrop"
import Divider from "../components/divider/Divider"
import Welcome from '../components/home/welcome/Welcome'
import FlatCard from '../component1/FlatCard'
import SeeFlats from '../services/seeFlats'
// import HelpForm from '../components/home/helpForm/HelpForm'
// import HelpForm2 from '../components/helpForm2/HelpForm2'
// import Method from '../components/home/method/Method'
// import Advice from '../components/home/advice/Advice'
import Footer from '../components/footer/Footer'



class Home extends Component {

  constructor (props){
    super(props)
    this.state = {
      sideDrawerOpen: false,
      pisos: []
    }
    this.prueba = new SeeFlats()
    this.prueba.getFlat()
  }


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({...this.state, sideDrawerOpen: false})
  }

  componentWillMount(){
  
    console.log('Entro aqui')
    this.prueba.getFlat()
    .then(data=>{
      console.log(data);
      this.setState({
        ...this.state,
        pisos: data
      })
    })
  }

  render() {




    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return (

      <div style={{height: '100%'}}>

        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}

        <Divider/>

        <Welcome/>

        {this.state.pisos.map((piso, index) => <FlatCard key={index} flat={piso}/>)}


        {/* <HelpForm2/> */}

        {/* <Method/> */}

        {/* <Advice/> */}

        <Footer/>

      </div>

    )

  }

}

export default Home;