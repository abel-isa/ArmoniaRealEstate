import React, { Component } from 'react'

import './HelpForm2.css'



class HelpForm2 extends Component {

    constructor() {

        super()

        this.state = { loggedInUser: null }

    }

    render() {

        return (

            <div id="form-main">
                <div id="form-div">
                    <form className="form" id="form1">

                        <h3 className="form-tittle">Escribe tu consulta a un <a href="#Asesor">Asesor Especializado</a></h3>

                        <p className="name">
                            <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Nombre" id="name" />
                        </p>

                        <p className="phone">
                            <input name="phone" type="text" className="validate[required,custom[onlyNumber],length[0,100]] feedback-input" placeholder="Teléfono" id="phone" />
                        </p>

                        <p className="email">
                            <input name="email" type="text" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Correo" />
                        </p>

                        <p className="postal-code">
                            <input name="postal-code" type="text" className="validate[required,custom[onlyNumber],length[0,100]] feedback-input" placeholder="Código Postal" id="postal-code" />
                        </p>

                        <p className="text">
                            <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="¿Cómo te podemos ayudar?"></textarea>
                        </p>

                        <p className="checkbox">
                            <input type="checkbox" id="test1" />
                            <label for="test1">He leido y acepto la <a href="#Politica">Política de Privacidad</a></label>
                        </p>


                        <div className="submit">
                            <input type="submit" value="SEND" id="button-blue" />
                            <div className="ease"></div>
                        </div>
                    </form>
                </div>
            </div>


        )

    }


}

export default HelpForm2