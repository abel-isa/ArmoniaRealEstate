import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import AdminRoutes from '../services/adminRoutes'
import './AddNews.css'


class AddNews extends Component {
    constructor() {
        super()
        this.state = {
            news: {
                title: "",
                description: "",
                img: ""
            }
        }
        this.adminRoute = new AdminRoutes()
    }

    handleChangeState = e => {
        const { name, value } = e.target;

        this.setState({
            ...this.state,
            news: {
                ...this.state.news,
                [name]: value
            }
        })
    }

    handleChangeFileState = e => {
        const { name, files } = e.target;
        this.setState({
            ...this.state,
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
            redirect: false,
            news: {
                title: "",
                description: "",
                img: ""
            }
        })
    }

    render() {
        return (
            <div id="news-form-main">

                <br></br>
                <br></br>

                <div className="news-form-container">
                    
                    <div className="flat-submit up-button"> 
                    
                        <Link id="flat-button-blue" to="/addFlat">Añadir vivienda</Link>
                        <div className="flat-ease"></div>

                    </div>
                    
                    <br></br>
                    <br></br>
                    
                    <div className="flat-submit up-button" onClick={this.props.logout}> 

                        <Link id="flat-button-blue" to="/">LogOut</Link>
                        <div className="flat-ease"></div>

                    </div>

                    <br></br>


                    <div id="news-form-div">
                        <h3 className="news-form-tittle">Añadir noticia</h3>

                        <form className="news-form" id="news-form1" onSubmit={this.handleSubmit}>

                            <legend className="news-form-legend">Descripción de la noticia:</legend>

                            {/* <label>Titular</label> */}
                            <input className="news-feedback-input" type="text" name="title" value={this.state.news.title} onChange={e => this.handleChangeState(e)} placeholder="Título del anuncio"></input>

                            {/* <label>Contenido</label> */}
                            <textarea className="flat-feedback-input" name="description" value={this.state.news.description} onChange={e => this.handleChangeState(e)}  placeholder="Contenido"></textarea>


                            <legend className="news-form-legend">Imágenes:</legend>
                            <input class='file-input' id="f02" type="file" name="img" value="" />
                            <label class='file-label' for="f02">Añadir foto</label>

                            <div className="news-submit">
                                <input id="news-button-blue" type="submit" name="submit" value="Añadir noticia" />
                                <div className="news-ease"></div>

                            </div>            
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default AddNews