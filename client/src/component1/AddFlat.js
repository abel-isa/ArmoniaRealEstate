import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'
import AdminRoutes from '../services/adminRoutes'


class AddFlat extends Component  {
    constructor(){
        super()
        this.state = {flat:{
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
            reference:'',
            state:'',
            floor:'',
            location: {  type: '' , coordinates: [] }
          }}
          this.adminRoute = new AdminRoutes()

    }

    
    handleChangeState = e => {
        const { name, value } = e.target;

        this.setState({...this.state,
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
        <div>
        { this.state.redirect ? <Redirect to="/listFlats"/> : //cuando el damos añadir vivienda el state redirect se vuelve true y nos redirecciona
        <div className="flat-form-container">
            <legend>Añadir una vivienda:</legend>

            <form onSubmit={this.handleSubmit}>
            <label>Título</label>
            <input type="text" name="title" value={this.state.flat.title} onChange={e => this.handleChangeState(e)} placeholder="título del anuncio"/>

            <label>Descripción</label>
            <input type="text" name="description" value={this.state.flat.description} onChange={(event) => this.handleChangeState(event)} placeholder="descripción del anuncio"/>
            <br></br>
            <br></br>

            
            <legend>Anuncio:</legend>
            <label>Precio</label>
            <input type="number" name="price" value={this.state.flat.price} onChange={(event) => this.handleChangeState(event)} placeholder="precio"/>

            <label>Oferta</label>
            <select>
             <option>Alquiler</option>
             <option>Compra</option>
            </select>
            <br></br>
            <br></br>

            <legend>Detalles del anuncio:</legend>
            <label>Referencia</label>
            <input type="text" name="reference" value={this.state.flat.reference} onChange={(event) => this.handleChangeState(event)} placeholder="referencia"/>

            <label>Estado</label>
            <input type="text" name="state" value={this.state.flat.state} onChange={(event) => this.handleChangeState(event)} placeholder="estado"/>

            <label>Exterior</label>
            <select name="type">
             <option value="si">Si</option>
             <option value="interior">Interior</option>
            </select>

            <label>Planta</label>
            <select name="floor">
             <option value="bajo">bajo</option>
             <option value="1">1</option>
             <option value="2"> 2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
             <option value="6">6</option>
             <option value="7">7+</option>
            </select>

            <label>Superficie construida</label>
            <input type="text" name="surface" value={this.state.flat.surface} onChange={(event) => this.handleChangeState(event)} placeholder="superficie construida"/>

            <label>Superficie vivienda</label>
            <input type="text" name="houseSize" value={this.state.flat.houseSize} onChange={(event) => this.handleChangeState(event)} placeholder="superficie vivienda"/>

            <label>Habitaciones</label>
            <input type="number" name="rooms" value={this.state.flat.rooms} onChange={(event) => this.handleChangeState(event)} placeholder="num hab"/>

            <label>Baños</label>
            <input type="number" name="bathrooms" value={this.state.flat.bathrooms} onChange={(event) => this.handleChangeState(event)} placeholder="num baños"/>

            <label>Terraza</label>
            <input type="number" name="terrace" value={this.state.flat.terrace} onChange={(event) => this.handleChangeState(event)} placeholder="metros cuadrados"/>

            <label>Garaje</label>
            <select name="parking" onChange>
             <option value="Si">Si</option>
             <option value="No">No</option>
            </select>

            <label>Calefacción</label>
            <input type="text" name="heating" value={this.state.flat.heating} onChange={(event) => this.handleChangeState(event)} placeholder="Gasnatural"/>
            <br></br>
            <br></br>

            <legend>Ubicaión:</legend>
            <input type="text" name="location" value={this.state.flat.location} onChange={(event) => this.handleChangeState(event)} placeholder="Dirección"/> 

            {/* mapa  */}
            <br></br>
            <br></br>

            <legend>Imágenes:</legend>
            <fielset>
            <input type="file" name="img" multiple onChange={(e) => this.handleChangeFileState(e)}/>
            </fielset>

            <br></br>
            <br></br>

            <input type="submit" name="submit" value="Añadir vivienda"/>
            
           
            
            </form>
   
        </div>}
        </div>
    )}
}

export default AddFlat