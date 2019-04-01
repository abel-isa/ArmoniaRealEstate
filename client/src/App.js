import React, { Component } from 'react';
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
        
      </div>
    );
  }
}

export default App;
