import React from 'react'
// import { Link } from 'react-router-dom'

import HelpForm2 from '../helpForm2/HelpForm2'
import './ContactHeader.css'



const ContactHeader = () => {

    return (
        <div>
        
        <header className="contact-header" >

            <h2 className="header-text">Contacto <br></br> Vende con ARMONIA</h2>

           
            {/* <Link className='btn btn-primary btn-lg' to="/FlatList">Lista de viviendas</Link> */}
        </header>

        <HelpForm2 />   
        </div>
    )
}

export default ContactHeader