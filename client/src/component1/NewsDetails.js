import React, { Component } from 'react'
import seeFlatsNews from '../services/seeFlatsNews'
import { Link } from 'react-router-dom'
import "./NewsDetails.scss"

class NewsDetails extends Component {

    constructor(props) {

        super(props)

        this.state = { news: {} }

        this.service = new seeFlatsNews()
    }

    componentDidMount() {

        this.service.getOneNews(this.props.match.params.id)
            .then(response => this.setState({ news: response }))
    }




    render() {
        return (
        <div id="breaking-news-container">
            <div id="breaking-news-colour" class="slideup animated">
              
            </div>  
              {/* <span class="breaking-news-title delay-animated slidein">
                // NOTICIAS //
              </span> 
              <a class="breaking-news-headline delay-animated2 fadein marquee">
                Encuentra las últimas novedades sobre viviendas en Madrid
              </a>    */}

                <header className='welcome-news-header'>
                
                </header>
               
               


        </div>   

        )
    }

}

export default NewsDetails

 