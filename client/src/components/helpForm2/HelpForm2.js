import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import HelpForm2Service from './../../services/helpForm2Service'

import './HelpForm2.css'


class HelpForm2 extends Component {

    constructor() {
        super()
        this.state = {
            helpForm2: {
                name: '',
                phone: '',
                email: '',
                postalCode: '',
                text: ''
            }
        }

        this.helpForm2Service = new HelpForm2Service()

    }


    handleChangeState = e => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            helpForm2: {
                ...this.state.helpForm2,
                [name]: value
            }
        })
    }



    handleSubmit = e => {
        e.preventDefault()

        this.helpForm2Service.sendEmail(this.state.helpForm2)
    }

    render() {

        return (

            <div id="form-main">
                <div id="form-div">
                    <form className="form" id="form1">

                        <h3 className="form-tittle">Escribe tu consulta a un <a href="#Asesor">Asesor Especializado</a></h3>

                        <p className="name">
                            <input name="name" type="text" className="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="Nombre" id="name" value={this.state.helpForm2.name} onChange={e => this.handleChangeState(e)} />
                        </p>

                        <p className="phone">
                            <input name="phone" type="text" className="validate[required,custom[onlyNumber],length[0,100]] feedback-input" placeholder="Teléfono" id="phone" value={this.state.helpForm2.phone} onChange={e => this.handleChangeState(e)} />
                        </p>

                        <p className="email">
                            <input name="email" type="email" className="validate[required,custom[email]] feedback-input" id="email" placeholder="Correo" value={this.state.helpForm2.email} onChange={e => this.handleChangeState(e)} />
                        </p>

                        <p className="postal-code">
                            <input name="postalCode" type="text" className="validate[required,custom[onlyNumber],length[0,100]] feedback-input" placeholder="Código Postal" id="postal-code" value={this.state.helpForm2.postalCode} onChange={e => this.handleChangeState(e)} />
                        </p>

                        <p className="text">
                            <textarea name="text" className="validate[required,length[6,300]] feedback-input" id="comment" placeholder="¿Cómo te podemos ayudar?" value={this.state.helpForm2.text} onChange={e => this.handleChangeState(e)}></textarea>
                        </p>

                        <p className="checkbox">
                            <input type="checkbox" id="test1" />
                            <label for="test1">He leido y acepto la <a href="#Politica">Política de Privacidad</a></label>
                        </p>


                        <div className="submit">
                            <input type="submit" value="ENVIAR" id="button-blue" />
                            <div className="ease"></div>
                        </div>
                        
                    </form>
                </div>
            </div>


        )

    }


}

export default HelpForm2