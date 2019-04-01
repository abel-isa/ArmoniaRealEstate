import React from 'react'
import { Link } from 'react-router-dom'

const FlatCard = (props) => {
    const flat = props.flat

    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card">
                {/* <img className="card-img-top" src={} alt="Card image cap"></img> */}
                <div className="card-body">
                    {/* <h5 className="card-title">{title}</h5> */}
                    <p className="card-text">{flat.title}</p>
                    {/* <Link className="btn btn-sm btn-outline-dark" to={`${/FlatDetails}`}>Más infor</Link> */}
                </div>
            </div>
        </div>
    )
}

export default FlatCard