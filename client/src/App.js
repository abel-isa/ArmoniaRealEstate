import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './routes/Home'
import Buy from './routes/Buy'
import Sell from './routes/Sell'
import Contact from './routes/Contact'
import News from './routes/News'
import Test from './routes/Test'
import LoginAdmin from './routes/LoginAdmin'
import AddFlatAdmin from './routes/AddFlatAdmin'
import AddNewsAdmin from './routes/AddNewsAdmin'
import PrivacyPolicy from './routes/PrivacyPolicy'
import FlatInfo from './routes/FlatInfo'


import Toolbar from "./components/navbar/Toolbar"
import SideDrawer from "./components/sideDrawer/SideDrawer"
import Backdrop from "./components/backdrop/Backdrop"
import Divider from "./components/divider/Divider"
import AuthService from './services/authService'

import './App.css'



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sideDrawerOpen: false,
      isAdmin:null
    }
    this.service = new AuthService();
    this.isLogin()

  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ ...this.state, sideDrawerOpen: false })
  }

  getLogin = (email,password) => {
    this.service.login(email, password)
            .then(response => {
                console.log(response)
                this.setState({ isAdmin:response }, () => {
                  window.location.assign('/addFlat')
                })
                //con el redirect es mejor porque no te vuelve a cargar la pagina 
            })
            .catch(error => console.log(error))
  }
  
  isLogin = () => {
    this.service.loggedin()
    .then(res => {
      this.setState({ isAdmin:res })
    })
  }



  logout = () => {
    console.log("entra")
    this.service.logout()
    .then(res => {
      this.setState({isAdmin:null})
    })
    
}
  routerAdmin = () => {
    return (
      <div>
      <Route exact path='/addFlat' render={() => <AddFlatAdmin logout={this.logout}></AddFlatAdmin>}/>
      <Route exact path='/addNews' render={() => <AddNewsAdmin logout={this.logout}></AddNewsAdmin>}/>
      </div>
      )
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
          <Route exact path='/privacy-policy' component={PrivacyPolicy} />
          <Route exact path='/flat-info/:id' component={FlatInfo} />
          <Route exact path='/login' render={ () => <LoginAdmin getLogin={this.getLogin}></LoginAdmin>}/>
          {this.state.isAdmin ? this.routerAdmin() : null}
          <Route path='/' render={() => <div><p>Peinate</p></div>}></Route>

        </Switch>

      </div>

    )
  }

}

export default App;
