import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import AdminRoutes from '../services/adminRoutes'

import './AddFlat.css'


class AddFlat extends Component {
    constructor() {
        super()
        this.state = {
            flat: {
                title: '',
                description: '',
                gallery: [],
                price: 0,
                rooms: 0,
                surface: 0,
                terrace: 0,
                heating: '',
                bathrooms: 0,
                houseSize: 0,
                parking: '',
                build: '',
                type: '',
                reference: '',
                state: '',
                floor: '',
                location: { type: '', coordinates: [] }
            }
        }
        this.adminRoute = new AdminRoutes()

    }


    handleChangeState = e => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            flat: {
                ...this.state.flat,
                [name]: value
            }
        })
    }

    handleChangeFileState = e => {
        const { name, files } = e.target;
        let gallery = [];
        for(let i = 0; i < files.length; i++){
            gallery.push(files[i])
        }

        this.setState({...this.state,
            flat: {
             ...this.state.flat,   
             [name]: gallery
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        // .then(x => this.props.refreshFlat())s
        this.adminRoute.addFlat(this.state.flat)

        // this.setState({
        //     redirect: false,
        //     flat: {
        //         title: '',
        //         description: '',
        //         gallery: [], 
        //         price: 0,
        //         rooms: 0,
        //         surface: 0,
        //         terrace: 0,
        //         heating: '',
        //         bathrooms: 0,
        //         houseSize: 0,
        //         parking: '',
        //         build: '',
        //         type: '',
        //         reference:'',
        //         state:'',
        //         floor:'',
        //         location: { type: { type: '' }, coordinates: [0] }
        //     }
        // })

    }




    render() {
        return (
            <div id="flat-form-main">
                {this.state.redirect ? <Redirect to="/listFlats" /> : //cuando el damos añadir vivienda el state redirect se vuelve true y nos redirecciona
                    <div id="flat-form-div">
                        <h3 className="flat-form-tittle">Añadir una vivienda</h3>

                        <form className="flat-form" id="flat-form1" onSubmit={this.handleSubmit}>

                            <legend className="flat-form-legend">Descrición de la vivienda:</legend>

                            <p>
                                <label>Título</label>
                                <input className="flat-feedback-input" type="text" name="title" value={this.state.flat.title} onChange={e => this.handleChangeState(e)} placeholder="Título del anuncio" />
                            </p>


                            <p>
                                <label>Descripción</label>
                                <textarea className="flat-feedback-input" type="text" name="description" value={this.state.flat.description} onChange={(event) => this.handleChangeState(event)} placeholder="Descripción del anuncio" />
                            </p>


                            <legend className="flat-form-legend">Anuncio:</legend>

                            <p>
                                <label>Precio</label>
                                <input className="flat-feedback-input" type="number" name="price" value={this.state.flat.price} onChange={(event) => this.handleChangeState(event)} placeholder="precio" />
                            </p>

                            <p>
                                <label>Oferta</label>
                                <select class="select-css">
                                    <option>Alquiler</option>
                                    <option>Compra</option>
                                </select>
                            </p>


                            <legend className="flat-form-legend">Detalles del anuncio:</legend>

                            <p>
                                <label>Referencia</label>
                                <input className="flat-feedback-input" type="text" name="reference" value={this.state.flat.reference} onChange={(event) => this.handleChangeState(event)} placeholder="Referencia" />
                            </p>

                            <p>
                                <label>Estado</label>
                                <input className="flat-feedback-input" type="text" name="state" value={this.state.flat.state} onChange={(event) => this.handleChangeState(event)} placeholder="Estado" />
                            </p>

                            <p>
                                <label>Exterior</label>
                                <select class="select-css" name="type">
                                    <option value="si">Si</option>
                                    <option value="interior">Interior</option>
                                </select>
                            </p>

                            <p>
                                <label>Planta</label>
                                <select class="select-css" name="floor">
                                    <option value="bajo">bajo</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7+</option>
                                </select>
                            </p>

                            <p>
                                <label>Superficie construida</label>
                                <input className="flat-feedback-input" type="text" name="surface" value={this.state.flat.surface} onChange={(event) => this.handleChangeState(event)} placeholder="Superficie construida" />
                            </p>

                            <p>
                                <label>Superficie vivienda</label>
                                <input className="flat-feedback-input" type="text" name="houseSize" value={this.state.flat.houseSize} onChange={(event) => this.handleChangeState(event)} placeholder="Superficie de la vivienda" />
                            </p>

                            <p>
                                <label>Habitaciones</label>
                                <input className="flat-feedback-input" type="number" name="rooms" value={this.state.flat.rooms} onChange={(event) => this.handleChangeState(event)} placeholder="num hab" />
                            </p>

                            <p>
                                <label>Baños</label>
                                <input className="flat-feedback-input" type="number" name="bathrooms" value={this.state.flat.bathrooms} onChange={(event) => this.handleChangeState(event)} placeholder="Número de baños" />
                            </p>

                            <p>
                                <label>Terraza</label>
                                <input className="flat-feedback-input" type="number" name="terrace" value={this.state.flat.terrace} onChange={(event) => this.handleChangeState(event)} placeholder="Metros cuadrados" />
                            </p>

                            <p>
                                <label>Garaje</label>
                                <select class="select-css" name="parking" onChange>
                                    <option value="Si">Si</option>
                                    <option value="No">No</option>
                                </select>
                            </p>

                            <p>
                                <label>Calefacción</label>
                                <input className="flat-feedback-input" type="text" name="heating" value={this.state.flat.heating} onChange={(event) => this.handleChangeState(event)} placeholder="Gas natural" />
                            </p>

                            <legend className="flat-form-legend">Ubicación:</legend>

                            <p>
                                <input type="text" name="location" value={this.state.flat.location} onChange={(event) => this.handleChangeState(event)} placeholder="Dirección" />
                            </p>

                            {/* mapa  */}

                            <legend className="flat-form-legend">Imágenes:</legend>


                            <input class='file-input' id="f02" type="file" name="img" value="" />
                            <label class='file-label' for="f02">Add profile picture</label>


                            <br></br>
                            <br></br>

                            <div className="flat-submit">
                                <input id="flat-button-blue" type="submit" name="submit" value="Añadir vivienda"/>
                                <div className="flat-ease"></div>
                            </div>

                        </form>

                    </div>}
            </div>
        )
    }
}

export default AddFlat