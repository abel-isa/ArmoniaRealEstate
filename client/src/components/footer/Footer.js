import React, { Component } from 'react';

import './Footer.css'



class Footer extends Component {

    constructor() {

        super()

        this.state = { loggedInUser: null }

    }


    render() {

        return (

            <footer>

                <section className='footer-section-1'>

                    <div className='container'>

                        <div className='row'>



                            <div class='col-sm-4 footer-cols'>

                                <div className='devider'>
                                <svg className='svg-footer-1' viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5t-57.5-12.5-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5t-215.5-264.5q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47.5-12.5-57.5-3.5-52.5q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z" fill="#ffffff"/></svg>
                                </div>

                                <div className='footer-line'>
                                    <p>Contáctenos</p>
                                    <p>+34 000 000 000</p>
                                    <div className="form-tittle">
                                        <p><a href='#email'>info@armonia</a></p>
                                    </div>
                                </div>
                            
                            </div>



                            <div class='col-sm-4 footer-cols'>

                                <div className='devider'>
                                <svg className='svg-footer-2' enable-background="new 0 0 24 24" id="Layer_1" version="1.1" viewBox="0 0 24 24" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><g><path clip-rule="evenodd" d="M12,0C5.375,0,0.003,5.373,0.003,12c0,6.627,5.372,12,11.997,12    c6.626,0,11.997-5.373,11.997-12C23.997,5.373,18.626,0,12,0z M16.412,16.709l-0.35,0.35c-0.291,0.291-0.782,0.305-1.088,0.029    l-4.52-3.955c-0.308-0.275-0.541-0.838-0.521-1.25l0.419-7.134C10.374,4.336,10.729,4,11.142,4h0.493    c0.413,0,0.767,0.336,0.787,0.748l0.343,5.934c0.021,0.413,0.262,1,0.535,1.309l3.144,3.628    C16.717,15.928,16.704,16.418,16.412,16.709z" fill-rule="evenodd" fill="#ffffff"/></g></g></svg>
                                </div>

                                <div className='footer-line'>
                                    <p>Horario de Oficina</p>
                                    <p>+Lunes a Viernes</p>
                                    <p>10:00am - 9:00pm</p>
                                </div>

                        </div>



                        <div class='col-sm-4 footer-cols'>

                                <div className='devider'>
                                <svg className='svg-footer-3' viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1152 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52l-365-774q-33-70-33-179 0-212 150-362t362-150 362 150 150 362z" fill="#ffffff"/></svg>
                                </div>
                          

                                <div className='footer-line'>
                                    <p>Nuestra ubicación</p>
                                    <p>C/ Serrano, 19.</p>
                                    <p>28001, Madrid</p>
                                </div>

                        </div>



                    </div>

            </div>


                </section>

                <section className='footer-section-2'>

                    <h3 id='footerID1'>Suscríbete</h3>

                    <div className="email footer-input">
                        <input name="email" type="email" className="feedback-input" id="email" placeholder="Correo"/>
                    </div>

                </section>

                <section>

                    <h3 id='footerID1'>Síguenos</h3>

                    <figure>
                    <a   target="_blank" href="https://www.instagram.com/armoniare2019/">
                    <svg className='svg-footer-3' enable-background="new 0 0 56.693 56.693" id="Layer_1" version="1.1" viewBox="0 0 56.693 56.693" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g><polygon points="38.512,24.392 38.512,20.445 38.512,19.855 37.922,19.857 33.975,19.871 33.99,24.407  " fill="#ffffff"/><path d="M28.225,34.868c2.598,0,4.713-2.113,4.713-4.711c0-1.025-0.334-1.975-0.893-2.748c-0.855-1.186-2.248-1.965-3.82-1.965   s-2.963,0.779-3.82,1.965c-0.559,0.773-0.891,1.723-0.891,2.748C23.514,32.755,25.627,34.868,28.225,34.868z" fill="#ffffff"/><path d="M28.348,5.158c-13.6,0-24.625,11.023-24.625,24.623c0,13.6,11.025,24.625,24.625,24.625   c13.598,0,24.623-11.025,24.623-24.625C52.971,16.181,41.945,5.158,28.348,5.158z M41.611,27.409V38.37   c0,2.852-2.322,5.172-5.174,5.172H20.012c-2.853,0-5.173-2.32-5.173-5.172V27.409v-5.464c0-2.853,2.32-5.173,5.173-5.173h16.425   c2.852,0,5.174,2.32,5.174,5.173V27.409z" fill="#ffffff"/><path d="M35.545,30.157c0,4.035-3.283,7.32-7.32,7.32s-7.318-3.285-7.318-7.32c0-0.973,0.193-1.898,0.537-2.748h-3.996V38.37   c0,1.414,1.15,2.564,2.564,2.564h16.425c1.414,0,2.564-1.15,2.564-2.564V27.409h-3.998C35.35,28.259,35.545,29.185,35.545,30.157z" fill="#ffffff"/></g></svg>
                    </a>
                    </figure>
                    
                    <p>Instagram</p>

                </section>

                <br></br>

                <section className='footer-section-4'>

                    <p className='p-copyright'>© 2019 Copyright: ARMONÍA Real Estate</p>

                </section>

            </footer>


        )

    }


}

export default Footer;