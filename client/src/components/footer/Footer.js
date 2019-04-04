import React, { Component } from 'react';

import './Footer.css'

import phoneIcon from '../footer/phoneIcon.png'



class Footer extends Component {

    constructor() {

        super()

        this.state = { loggedInUser: null }

    }


    render() {

        return (

            <footer>

                <section className='footer-section-1'>

                    <article className='footer-row'>

                        <div className='footer-cols'>

                            <div>
                                <figure>
                                    <img src={phoneIcon} alt="Phone Icon" />
                                </figure>
                            </div>

                            <div className='footer-text'>
                                <p>Contáctenos</p>
                                <p>+34 000 000 000</p>
                                <p><a href='#email'>info@armonia</a></p>
                            </div>

                        </div>

                        <div className='footer-cols'>

                            <div>
                                <figure>
                                    <img className='footer-section-1-img' src={phoneIcon} alt="Phone Icon" />
                                </figure>
                            </div>

                            <div className='footer-text'>
                                <p>Horario de Oficina</p>
                                <p>+Lunes a Viernes</p>
                                <p>10:00am - 9:00pm</p>
                            </div>

                        </div>

                        <div className='footer-cols'>

                            <div>
                                <figure>
                                    <img className='footer-section-1-img' src={phoneIcon} alt="Phone Icon" />
                                </figure>
                            </div>

                            <div className='footer-text'>
                                <p>Nuestra ubicación</p>
                                <p>C/ Serrano, 19.</p>
                                <p>28001, Madrid</p>
                            </div>

                        </div>

                    </article>



                </section>

                <section className='footer-section-2'>

                    <h3>Suscríbete</h3>

                </section>

                <section className='footer-section-3'>

                    <figure>
                        <img src={phoneIcon} alt="Phone Icon" />
                    </figure>

                </section>

                <section className='footer-section-4'>

                    <p className='p-copyright'>© 2019 Copyright: ARMONÍA Real Estate</p>

                </section>

            </footer>


        )

    }


}

export default Footer;