import React, { Component } from 'react'

import Toolbar from "../components/navbar/Toolbar"
import SideDrawer from "../components/sideDrawer/SideDrawer"
import Backdrop from "../components/backdrop/Backdrop"
import Divider from "../components/divider/Divider"
import Welcome from '../components/home/welcome/Welcome'
// import HelpForm from '../components/home/helpForm/HelpForm'
import HelpForm2 from '../components/helpForm2/HelpForm2'
// import Method from '../components/home/method/Method'
// import Advice from '../components/home/advice/Advice'
// import Footer from '../components/footer/Footer'



class Home extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
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

        <HelpForm2/>

        {/* <Method/> */}

        {/* <Advice/> */}

        {/* <Footer/> */}

      </div>

    )

  }

}

export default Home;