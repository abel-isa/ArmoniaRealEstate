import React from 'react'
import { Link } from 'react-router-dom'

import './SalesHeader.css'



const SalesHeader = () => {

    return (
        
        <header className="sales-header" >

            <h2 className="header-text">Vende con Seguridad <br></br> Vende con ARMONIA</h2>

           
            <Link className='btn btn-primary btn-lg' to="/contact">Contáctenos</Link>
        </header>
    )
}

export default SalesHeader