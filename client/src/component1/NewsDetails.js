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
        <div id="flat-details-div">

          <header className="sales-header">
          <h1 id="flat-header-h2">{this.state.news.title}</h1>

          </header>
            
               
               


        </div>   

        )
    }

}

export default NewsDetails

 