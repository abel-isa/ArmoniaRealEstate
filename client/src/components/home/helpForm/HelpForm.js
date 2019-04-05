import React, { Component } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './HelpForm.css'



class HelpForm extends Component {

    constructor() {

        super()

        this.state = { loggedInUser: null }

    }

    render() {

        return (

            <form>

                <h3>Escribe tu consulta a un <a href="mailto:info@armoniarealestate.com">Asesor Especializado</a></h3>

                <Form action='javascripts:;'>

                    <Form.Group controlId="formBasicName">
                        <Form.Control type="text" placeholder="Nombre" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPhone">
                        <Form.Control type="number" placeholder="Teléfono"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Correo electrónico" />
                        {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
                    </Form.Group>

                    <Form.Group controlId="formBasicPostalCode">
                        <Form.Control type="number" placeholder="Código Postal"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicHelp">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="text" placeholder="¿Cómo te podemos ayudar?" />
                    </Form.Group>

                    <Form.Group controlId="formBasicChecbox">
                        {/* <Form.Check type="checkbox" label="He leido y acepto la" /> */}
                        <Form.Label><a href="#Politica">Política de Privacidad</a></Form.Label>
                    </Form.Group>


                    <Button variant="primary" type="submit">Enviar</Button>
                </Form>

            </form>
        )

    }


}

export default HelpForm



