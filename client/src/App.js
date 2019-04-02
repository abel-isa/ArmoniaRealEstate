import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './routes/Home'
import Buy from './routes/Buy'
import Sell from './routes/Sell'
import Contact from './routes/Contact'
import News from './routes/News'
import Test from './routes/Test'

import Toolbar from "./components/navbar/Toolbar"
import SideDrawer from "./components/sideDrawer/SideDrawer"
import Backdrop from "./components/backdrop/Backdrop"
import Divider from "./components/divider/Divider"

import './App.css'



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sideDrawerOpen: false
    }
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ ...this.state, sideDrawerOpen: false })
  }

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    console.log(this.state)

    return (

      <div className='app' style={{ height: '100%' }}>

        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} fn={this.drawerToggleClickHandler} />
        {backdrop}

        <Divider />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/buy' component={Buy} />
          <Route exact path='/sell' component={Sell} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/news' component={News} />
          <Route exact path='/test' component={Test} />
        </Switch>

      </div>

    )
  }

}

export default App;
