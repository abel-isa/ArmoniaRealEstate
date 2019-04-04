import React from 'react'
import { Link } from 'react-router-dom'

import DrawerToggleButton from '../sideDrawer/DrawerToggleButton'

import './Toolbar.css'

import logo from '../navbar/logo.png'



const toolbar = props => (

    <nav className="toolbar">
        <div className="toolbar__navigation">


            
            {/* (2) */}
            <div className="toolbar__logo">
                <Link to="/">
                    <figure>
                        <img className='logo' src={logo} alt="Armonia Real Estate Logo" />
                    </figure>
                </Link>
            </div>
            
            {/* (1) */}
            <div className='toolbar__toggle-button'>
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>

            {/* <div className="spacer" /> */}

            <div className="toolbar_navigation-items">
                <ul>
                    <li className='animated_link2'>
                        <Link to="/sell">Vender</Link>
                    </li>
                    <li className='animated_link2'>
                        <Link to="/buy">Comprar</Link>
                    </li>
                    <li className='animated_link2'>
                        <Link to="/contact">Contacto</Link>
                    </li>
                    <li className='animated_link2'>
                        <Link to="/news">Noticias</Link>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
)

export default toolbar