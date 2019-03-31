import React from 'react'

import './Advice.css'

// import homeIcon from '../home/advice/home-icon.jpg'
import homeIcon from '../advice/home-icon.jpg'



const Advice = () => {

    return (
        
        <section className="section-advice">

            <figure>
                <img src={homeIcon} alt="Armonia Real Estate Logo"/>
            </figure>
            
            <h3>Te Asesoramos</h3>


            <p>En ARMONIA Real Estate somos conscientes de la importancia que tiene para usted vender o alquilar su propiedad, por ello mismo no trabajamos a volumen como la mayoría de empresas del sector. Nuestro objetivo es que cada operación se lleve a cabo de la forma mas transparente y exitosa.</p>

        </section>
    )
}

export default Advice