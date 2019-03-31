import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'

import logo from '../navbar/logo.png'

import './TheNavBar.css'



class TheNavbar extends Component {

    render() {

        return (

            <nav>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                    <Navbar.Brand>
                        <Link to="/">
                            <figure>
                                <img className="pull-left logo" src={logo} alt="Armonia Real Estate Logo" />
                            </figure>
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="mr-auto">
                            <Link to="/sell">Vender</Link>
                            <Link to="/buy">Comprar</Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>

                        <Nav>
                            <Link to="/contact">Contacto</Link>
                            <Link to="/news">Noticias</Link>
                        </Nav>

                    </Navbar.Collapse>

                </Navbar>

            </nav>
        )

    }

}

export default TheNavbar;