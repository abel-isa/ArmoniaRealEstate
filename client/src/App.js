import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './routes/Home'
import Buy from './routes/Buy'
import Sell from './routes/Sell'
import Contact from './routes/Contact'
import News from './routes/News'
import SeeFlats from './services/seeFlats'

import './App.css'



class App extends Component {
  constructor(){
    super()
    this.state = {}

    this.seeFlats = new SeeFlats() 


  }
  render() {

    return (

      <div className='app' style={{height: '100%'}}>
      
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/buy' component={Buy}/>
          <Route exact path='/sell' component={Sell}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/news' component={News}/>
        </Switch>

{/* import React, { Component } from 'react';
import logo from './logo.svg';
import MapContainer from './component1/MapContainer'
import './App.css';
import SeeFlats from './services/seeFlats'

class App extends Component {

  constructor(){
    super()
    this.state = {}

    this.seeFlats = new SeeFlats() 


  }
  



  render() {

    this.seeFlats.getFlat() 




    return (
      <div className="App">
        <MapContainer/>
    )*/}
        
      </div>


    )} 

}

export default App;
