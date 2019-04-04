import React, { Component } from 'react'
import NewsCard from '../component1/NewsCard';
import seeFlats from '../services/seeFlatsNews'




class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: []
    }
    this.prueba = new seeFlats()
    this.prueba.getNew()
      .then(data => this.setState({ ...this.state, news: data }))
  }
  render() {

    return (

      <div>

      {this.state.news.map((news, index) => <NewsCard key={index} news={news} />)}


      </div>

    )

  }

}

export default News;