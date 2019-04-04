import React, { Component } from 'react'
import { Switch, Route , Link} from 'react-router-dom'

import Home from './routes/Home'
import Buy from './routes/Buy'
import Sell from './routes/Sell'
import Contact from './routes/Contact'
import News from './routes/News'
import Test from './routes/Test'
import LoginAdmin from './routes/LoginAdmin'
import AddFlatAdmin from './routes/AddFlatAdmin'
import AddNewsAdmin from './routes/AddNewsAdmin'
import NewsDeatils from './component1/NewsDetails'



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


  setCookie = () => {
    console.log(document.cookie)
    document.cookie = "aceptaCookies=true;max-age=1000000"
    this.setState();
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
          <Route exact path='/NewsDetails/:id' component={NewsDeatils} />
         

          <Route exact path='/login' render={ () => <LoginAdmin getLogin={this.getLogin}></LoginAdmin>}/>
          {this.state.isAdmin ? this.routerAdmin() : null}
          <Route path='/' render={() => <div><p>Peinate</p></div>}></Route>

          

        </Switch>
        {!document.cookie ? 
          <div id="privacidad">
          Las cookies nos ayudan a ofrecer nuestros servicios. Al utilizar nuestros servicios, acepta nuestro uso de cookies.
          <a  target="_blank" href="politicaDePrivacidad">Más información</a>
          <button onClick={this.setCookie}>Aceptar</button>
          </div>: null
        }




      </div>

    )
  }

}

export default App;
