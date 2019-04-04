import React, {Component} from 'react'
import Vivus from 'vivus'

import './Advice.css'


class Advice extends Component {

    constructor(){
        super();

    }

    componentDidMount(){
        new Vivus('house', { duration: 200, animTimingFunction: Vivus.EASE})
        new Vivus('Layer_1', { duration: 200, animTimingFunction: Vivus.EASE})
        new Vivus('Layer_2', { duration: 200, animTimingFunction: Vivus.EASE})
    }



    render(){

        return (
        
            <section className="section-advice">
    
                <h2 className='advice-title'>Mucho más que una inmobiliaria</h2>
    
                <p>Garantizamos el servicio de la experiencia de la compra y/o venta de sus inmuebles</p>
    
                <hr className='hr-advice' ></hr>
    
                <figure>
                    <svg className='advice-svg' version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve">
                    <g>
                    <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="29,6 46,6 63,27 32,58 1,27 18,6 32,6 
                        32,58 	"/>
                    <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="32,57 18,27 24,6 	"/>
                    <polyline fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" points="32,57 46,27 40,6 	"/>
                    <line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="1" y1="27" x2="63" y2="27"/>
                    </g>
                    </svg>
    
                </figure>
                
                <h4 className='advice-title'>Nuestra Filosofía</h4>
     
    
                <p>Un nuevo concepto de inmobiliaria de lujo en Madrid llevado a cabo con ARMONIA, experiencia, conocimientos teécnicos y detalle</p>
    
                <figure>
                    <svg className='advice-svg' version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve">
                    <path fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" d="M53.92,10.081c12.107,12.105,12.107,31.732,0,43.838
                    c-12.106,12.108-31.734,12.108-43.84,0c-12.107-12.105-12.107-31.732,0-43.838C22.186-2.027,41.813-2.027,53.92,10.081z"/>
                    <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="32" cy="32" r="22.999"/>
                    <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="32" cy="32" r="15"/>
                    <circle fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" cx="32" cy="32" r="6.999"/>
                    </svg>
                </figure>
    
                <h4 className='advice-title'>Nuestro Objetivo</h4>
    
                <p>Estamos enfocados en que cada operación se lleve a cabo de la forma mas transparente y exitosa.</p>
    
                <figure>
                    <svg className='advice-svg' version="1.1" id="house" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve"><polygon fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" points="32,3 2,33 11,33 11,63 23,63 23,47 39,47 39,63 51,63 51,33 62,33 "/></svg>
                </figure>
    
                <h4 className='advice-title'>Te Asesoramos</h4>
    
                <p>Somos conscientes de la importancia que tiene para usted comprar, vender o alquilar su propiedad, por ello mismo no trabajamos a volumen como la mayoría de empresas del sector.</p>
    
    
            </section>
        )
    }


}

export default Advice