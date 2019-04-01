import React, { Component } from 'react'
import FlatService from '../service/FlatService'
import { Link } from 'react-router-dom'

class FlatDetails extends Component {

    constructor(props) {

        super(props)

        this.state = { coaster: {} }

        this.service = new FlatService()
    }

    componentDidMount() {

        this.service.getOneFlat(this.props.match.params.id)
            .then(response => this.setState({ flat: response }))
    }




    render() {
        return (
            <div className="container coaster-detail">
                <h1>{this.piso.title}</h1>
                <div className="row">

                    <div className="col-md-8">
                        <img src={this.state.piso.imageUrl} alt={this.state.piso.title}></img>
                    </div>
                    <div className="col-md-4">
                       

                    </div>

                </div>
            </div>

        )
    }

}

export default FlatDetails
