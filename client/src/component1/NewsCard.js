import React from 'react'
import './FlatCard.css'
import { Link } from 'react-router-dom'

const NewsCard = (props) => {
    const news = props.news
    console.log(props)

    return(
        <div className='container text-center align-content-center align-items-center justify-content-center flat-card-container'>
           <div className='row text-center align-content-center align-items-center justify-content-center'>
                <div className='col text-center align-content-center align-items-center justify-content-center'>
                    <h3 className='advice-title'>Noticias</h3>
                </div>
            </div>

            <div className='row text-center align-content-center align-items-center justify-content-center'>

                <div className='col text-center align-content-center align-items-center justify-content-center flat-card-image'>

                <p></p>

                </div>
            </div>


            <div className='row text-center align-content-center align-items-center justify-content-center'>

                <div className='col extra-padding'>

                    <br></br>
                    <p>holapepe</p>
                    <h4 className="card-text">{news.title}</h4>
                    <br></br>
                    {news.description ? <p className="card-text">{news.description.slice(0,100)+" ..."}</p>: null}

                    {/* <p className="card-text">{news.description}</p> */}

                <br></br>

                    <div className='flat-type2'>
                        <Link to={`/NewsDetails/${news._id}`}>Leer más</Link>
                    </div>

                </div>

            </div>




        </div>
    )

}


export default NewsCard