import React from 'react'
import { Link } from 'react-router-dom'

import './SalesHeader.css'



const SalesHeader = () => {

    return (
        
        <header className="sales-header" >

            <h1 id="welcome-header-h2">Vende con Seguridad <br></br> Vende con ARMONIA</h1>

            <br></br>

            <Link className='btn btn-primary btn-lg' to="/contact">Contáctenos</Link>

        </header>
    )
}

export default SalesHeader