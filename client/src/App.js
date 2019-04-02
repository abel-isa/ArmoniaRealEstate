import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './routes/Home'
import Buy from './routes/Buy'
import Sell from './routes/Sell'
import Contact from './routes/Contact'
import News from './routes/News'

import './App.css'



class App extends Component {

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

        
      </div>


    )} 

}

export default App;
