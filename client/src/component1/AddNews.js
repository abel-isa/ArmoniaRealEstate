import React, {Component} from 'react'
import { Link, Redirect } from 'react-router-dom'

import AdminRoutes from '../services/adminRoutes'


class AddNews extends Component {
    constructor(){
        super()
        this.state = {
            news:{
            title:"",
            description:"",
            img:""
        }}
        this.adminRoute = new AdminRoutes()
    }

    handleChangeState = e => { 
        const { name, value } = e.target;

        this.setState({...this.state,
            news: {
             ...this.state.news,   
             [name]: value
            }
        })
    }

    handleChangeFileState = e => { 
        const { name, files } = e.target;
        this.setState({...this.state,
            news: {
             ...this.state.news,   
             [name]: files[0]
            }
        })
    }


    handleSubmit = e => {
        e.preventDefault()

            // .then(x => this.props.refreshFlat())s
            this.adminRoute.addNew(this.state.news)

        this.setState({
            redirect:false,
            news:{
                title:"",
                description:"",
                img:""
            }
        })
    }

    render () {
        return (
            <div className="flat-form-container">
            <legend>Añadir una noticia:</legend>
            <form onSubmit={this.handleSubmit}>
            <label>Titular</label>
            <input type="text" name="title" value={this.state.news.title} onChange={e => this.handleChangeState(e)} placeholder="título del anuncio"></input>

            <label>Contenido</label>
            <textarea name="description" value={this.state.news.description} onChange={e => this.handleChangeState(e)}class="form textarea"  placeholder="Contenido"></textarea> 


            <legend>Imágenes:</legend>
            <fielset>
            <input type="file" name="img" onChange={e => this.handleChangeFileState(e)}></input>
            </fielset>           
            
            <button type="submit" id="submit" name="submit" class="form-btn semibold">Enviar noticia</button> 
            </form>
        </div>
        )
    }
}


export default AddNews