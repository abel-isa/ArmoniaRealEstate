import React from 'react'

import './Method.css'

import homeIcon2 from '../method/home-icon2.jpg'
import Link from 'react-router-dom'



const Method = () => {

    return (

        <section className="section-method">

            <figure>
                <img src={homeIcon2} alt="Armonia Real Estate Logo"/>
            </figure>

            <h3>Nuestro Método</h3>

            <p>Un nuevo concepto de inmobiliaria de lujo en Madrid llevado a cabo con ARMONIA, experiencia, conocimientos técnicos y detalle.</p>


          

        </section>
    )
}

export default Method