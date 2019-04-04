import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import FlatService from '../services/seeFlats'

import './FlatDetails.css'


class FlatDetails extends Component {

    constructor(props) {

        super(props)

        this.state = { flat: {} }

        this.service = new FlatService()
    }

    componentDidMount() {
        console.log(this.props)
        this.service.getOneFlat(this.props.match.params.id)
            .then(response => this.setState({ flat: response }))
    }




    render() {
        return (

            <div id='flat-details-div'>


                <header className="sales-header" >

                    <h1 id="flat-header-h2">{this.state.flat.title}</h1>

                    {/* <br></br> */}

                </header>



                {/* <h2>{this.state.flat.title}</h2> */}

                <section id='flat-section-1'>

                    <p>{this.state.flat.description}</p>

                    <h3>Galería</h3>

                    <figure>
                        <img src="" alt="" />
                        <p>imagen?</p>
                    </figure>

                    <figure>
                        <img src="" alt="" />
                        <p>imagen?</p>
                    </figure>

                    <article id='flat-article-1'>

                        <h5 id='flatDetailID2'><b> €{this.state.flat.price}</b></h5>

                        <div className='detail-type'>
                            <p id='flatDetailID1'>{this.state.flat.type}</p>
                        </div>

                    </article>

                    <hr/>

                    <article className='flat-article-2'>
                        <p>Habitaciones</p>
                        <p>{this.state.flat.rooms}</p>
                    </article>

                    <hr/>

                    <article className='flat-article-2'>
                        <p>Baños</p>
                        <p>{this.state.flat.bathrooms}</p>
                    </article>

                    <hr/>                    
                    
                    <article className='flat-article-2'>
                        <p>Superficie</p>
                        <p>{this.state.flat.surface}m<sup>2</sup></p>
                    </article>

                    <hr/>

                    <article className='flat-article-2'>
                        <p>Terraza</p>
                        <p>{this.state.flat.terrace}m<sup>2</sup></p>
                    </article>

                    <hr/>

                    <article className='flat-article-2'>
                        <p>Aparcamiento</p>
                        <p>{this.state.flat.parking}</p>
                    </article>



                    <h3>Localización</h3>

                </section>




            </div>

        )
    }

}

export default FlatDetails



{/* <div className='container text-center align-content-center align-items-center justify-content-center flat-card-container'>


<div className='row text-center align-content-center align-items-center justify-content-center'>

    <div className='col text-center align-content-center align-items-center justify-content-center flat-card-image'>

        <p></p>

    </div>
</div>

<div className='row text-center align-content-center align-items-center justify-content-center'>

    <div className='col text-center align-content-center align-items-center justify-content-center extra-padding2'>

        <h5 id='flatCardID2'><b>€{this.state.flat.price}</b></h5>

    </div>

    <div className='col text-center align-content-center align-items-center justify-content-center extra-padding2'>

        <div className='flat-type'>
            <p id='flatCardID1'>{this.state.flat.type}</p>
        </div>


    </div>

</div>

<hr className='hr-flatcard'></hr>


<div className='row text-center align-content-center align-items-center justify-content-center'>

    <div className='col extra-padding'>

        <br></br>
        <h4 className="card-text">{this.state.flat.title}</h4>
        <br></br>
        <p className="card-text">{this.state.flat.description}</p>

        <br></br>

        <div className='flat-type2'>
            <Link id='flatCardID3' to={`/flat-info/${this.state.flat._id}`}>Más info</Link>
        </div>

    </div>

</div>

<br></br>

<div className='row text-center align-content-center align-items-center justify-content-center'>

    <div className='col text-center align-content-center align-items-center justify-content-center flat-margins'>

        <svg className='flat-svg' version="1.1" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns" xmlnsXlink="http://www.w3.org/1999/xlink"><title/><desc/><defs/><g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1"><g fill="#000000" id="Core" transform="translate(-506.000000, -255.000000)"><g id="home" transform="translate(506.000000, 255.500000)"><path d="M8,17 L8,11 L12,11 L12,17 L17,17 L17,9 L20,9 L10,0 L0,9 L3,9 L3,17 L8,17 Z" id="Shape" data-old_color="#ff942a" fill="#ff942a"/></g></g></g></svg>

        <br></br>
    
        <b>Superficie:</b>
        <p>{this.state.flat.surface}m<sup>2</sup></p>

    </div>

    <div className='col text-center align-content-center align-items-center justify-content-center flat-margins'>
    
        <svg className='flat-svg' id="Layer_1" version="1.1" viewBox="0 0 240 240" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M80,119.834c0,13.241-10.729,23.979-23.963,23.979c-13.232,0-23.962-10.737-23.962-23.979  c0-13.239,10.729-23.975,23.962-23.975C69.271,95.859,80,106.595,80,119.834z M80,143.812c42.6,0,85.201,0,127.801,0  C162.759,100.185,125.654,102.203,80,143.812L80,143.812z M224.025,112.094v47.953H15.975V80H0v127.875h15.975v-16.109h208.05V208  H240v-95.906H224.025z" data-old_color="#ff942a" fill="#ff942a"/></svg>

        <br></br>

        <b>Habitaciones:</b>
        <p>{this.state.flat.rooms}</p>

    </div>

    <div className='col text-center align-content-center align-items-center justify-content-center flat-margins'>

        <svg className='flat-svg' enable-background="new 0 0 24 24" id="Layer_1" version="1.1" viewBox="0 0 24 24"  xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><path d="M23,11H3V3c0-1.1,0.9-2,2-2s2,0.9,2,2v1.1C6.6,4.2,6.2,4.6,6.1,5h2.8C8.8,4.6,8.4,4.2,8,4.1V3c0-1.7-1.3-3-3-3S2,1.3,2,3v8  H1c-0.6,0-1,0.4-1,1v4c0,2.2,1.2,4.2,3,5.2V22c0,1.1,0.9,2,2,2s2-0.9,2-2h10c0,1.1,0.9,2,2,2s2-0.9,2-2v-0.8c1.8-1,3-3,3-5.2v-4  C24,11.4,23.6,11,23,11z M5,23c-0.6,0-1-0.4-1-1v-0.3C4.6,21.9,5.3,22,6,22C6,22.6,5.6,23,5,23z M20,22c0,0.6-0.4,1-1,1s-1-0.4-1-1  c0.7,0,1.4-0.1,2-0.3V22z M22,16c0,2.2-1.8,4-4,4H6c-2.2,0-4-1.8-4-4v-1h20V16z M22,14H2v-1h20V14z" data-old_color="#ff942a" fill="#ff942a"/></svg>

        <br></br>

        <b>Baños:</b>
        <p>{this.state.flat.bathrooms}</p>

    </div>

    <div className='col text-center align-content-center align-items-center justify-content-center flat-margins'>
    
        <svg className='flat-svg'  version="1.1" viewBox="0 0 240 240" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path d="M0,0v240h240V0H0z M227.983,228H12.017V12h215.966V228z M97.444,135.429h16.022c17.675,0,31.377-3.793,41.104-11.381  c9.729-7.587,14.591-18.492,14.591-32.715c0-27.301-17.452-40.952-52.357-40.952H79.896v139.238h17.548V135.429z M97.444,65.333  h17.739c12.27,0,21.299,2.223,27.085,6.666c5.785,4.445,8.678,11.144,8.678,20.096c0,9.904-3.116,17.095-9.346,21.571  c-6.231,4.477-16.277,6.714-30.137,6.714h-14.02V65.333z" data-old_color="#ff942a" fill="#ff942a"/></svg>

        <br></br>

        <b>Aparcamiento:</b>
        <p>{this.state.flat.parking}</p>

    </div>

    <div className='col text-center align-content-center align-items-center justify-content-center flat-margins'>

        <svg className='flat-svg' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 297 297"  xmlSpace="preserve">
        <g>
        <path d="M170.607,277.775h-12.495v-75.932h53.825c14.045,0,25.471-11.426,25.471-25.471c0-14.045-11.426-25.471-25.471-25.471
        h-53.825V88.747h123.64c3.496,0,6.716-1.898,8.409-4.957c1.693-3.058,1.592-6.796-0.264-9.758
        c-23.751-37.909-74.831-63.093-131.871-65.634C157.429,3.664,153.396,0,148.5,0s-8.929,3.664-9.527,8.398
        C81.933,10.939,30.854,36.123,7.103,74.032c-1.856,2.962-1.957,6.7-0.264,9.758c1.693,3.059,4.913,4.957,8.409,4.957h123.64v62.155
        H85.064c-14.045,0-25.471,11.426-25.471,25.471c0,14.045,11.426,25.471,25.471,25.471h53.825v75.932h-12.495
        c-5.308,0-9.612,4.304-9.612,9.612s4.304,9.612,9.612,9.612h44.213c5.308,0,9.612-4.304,9.612-9.612
        S175.915,277.775,170.607,277.775z M148.5,27.393c46.188,0,88.584,16.108,113.559,42.13H34.941
        C59.916,43.501,102.312,27.393,148.5,27.393z M78.816,176.373c0-3.445,2.803-6.248,6.248-6.248h126.873
        c3.445,0,6.248,2.803,6.248,6.248s-2.803,6.248-6.248,6.248H85.064C81.619,182.62,78.816,179.817,78.816,176.373z" data-old_color="#ff942a" fill="#ff942a"/>
        <path d="M95.727,221.865c-0.977-4.398-4.878-7.527-9.383-7.527H39.569V112.936c0-5.308-4.304-9.612-9.612-9.612
        s-9.612,4.304-9.612,9.612v109.96L6.477,285.302c-1.152,5.181,2.116,10.316,7.298,11.467c0.702,0.156,1.403,0.231,2.094,0.231
        c4.405,0,8.378-3.049,9.373-7.529l12.425-55.91h40.968l12.425,55.91c0.995,4.48,4.967,7.529,9.373,7.529
        c0.691,0,1.392-0.075,2.094-0.231c5.182-1.152,8.45-6.286,7.298-11.467L95.727,221.865z" data-old_color="#ff942a" fill="#ff942a"/>
        <path d="M276.654,222.896v-109.96c0-5.308-4.304-9.612-9.612-9.612c-5.308,0-9.612,4.304-9.612,9.612v101.402h-46.776
        c-4.504,0-8.405,3.128-9.383,7.527l-14.097,63.436c-1.152,5.181,2.116,10.316,7.298,11.467c0.702,0.156,1.403,0.231,2.094,0.231
        c4.405,0,8.378-3.049,9.373-7.529l12.425-55.91h40.968l12.425,55.91c0.995,4.48,4.967,7.529,9.373,7.529
        c0.691,0,1.392-0.075,2.094-0.231c5.182-1.152,8.45-6.286,7.298-11.467L276.654,222.896z" data-old_color="#ff942a" fill="#ff942a"/>
        </g>
        </svg>

        <br></br>

        <b>Terraza:</b>
        <p>{this.state.flat.terrace}m<sup>2</sup></p>

    </div>


</div>

</div> */}
