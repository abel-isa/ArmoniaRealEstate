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

                <section>

                    <article>

                        <div>

                            <div>
                                <figure>
                                    <img src={phoneIcon} alt="Phone Icon" />
                                </figure>
                            </div>

                            <div>
                                <p>Contáctenos</p>
                                <p>+34 000 000 000</p>
                                <p><a href='#email'>info@armonia</a></p>
                            </div>

                        </div>

                        <div>

                            <div>
                                <figure>
                                    <img src={phoneIcon} alt="Phone Icon" />
                                </figure>
                            </div>

                            <div>
                                <p>Horario de Oficina</p>
                                <p>+Lunes a Viernes</p>
                                <p>10:00am - 9:00pm</p>
                            </div>

                        </div>

                        <div>

                            <div>
                                <figure>
                                    <img src={phoneIcon} alt="Phone Icon" />
                                </figure>
                            </div>

                            <div>
                                <p>Nuestra ubicación</p>
                                <p>C/ Serrano, 19.</p>
                                <p>28001, Madrid</p>
                            </div>

                        </div>

                    </article>



                    <article>

                        <h3>Suscríbete</h3>
                        <p>Recibe todas las novedades del sector inmobiliario con nosotros.</p>

                    </article>

                    <article>

                        <figure>
                            <img src={phoneIcon} alt="Phone Icon" />
                        </figure>

                    </article>

                </section>

                <section>

                    <p>© 2019 Copyright: ARMONÍA Real Estate</p>

                </section>

            </footer>


        )

    }


}

export default Footer;