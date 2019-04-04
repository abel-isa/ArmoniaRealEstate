import React, {Component} from 'react'
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '40%'
    }
}
Modal.setAppElement('#root')

class SearchForm extends Component {
    constructor(){
        super()
        this.state = {
            modalIsOpen: false
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }



    render() {

        return (
    
            <div>
            <button onClick={this.openModal} className="btn newCoaster btn-primary">Búsqueda avanzada</button>
            <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>

                
                <form onSubmit={this.handleSubmit}>

                    {/* formulario búsqueda inicial */}

                    {/* <div className="form-group">
                        <label>Título</label>
                        <input type="text" className="form-control" name="title" value={this.state.coaster.title} onChange={(e) => this.handleState(e)} />
                    </div> */}

                    <p>
                        <label>Distrito</label>
                         <select class="select-css">
                         <option>Centro</option>
                         <option>Chamartín</option>
                         <option>Chamberí</option>
                         <option>Retiro</option>
                         <option>Salamanca</option>
                         </select>
                    </p>

                    <button type="submit" className="btn btn-primary">Búsqueda Avanzada</button>

                    {/* formulario ventana modal/busqueda avanzada */}

                    <p>
                     <label></label>
                    <input className="" type="number" name="precio-min" value="" placeholder="min" />
                    </p>

                    <p>
                     <label>Precio</label>
                    <input className="" type="number" name="precio-max" value="" placeholder="max" />
                    </p>

                    <p>
                     <label>Superficie</label>
                     {/* <input className="flat-feedback-input" type="text" name="surface" value={this.state.flat.surface} onChange={(event) => this.handleChangeState(event)} placeholder="Superficie construida" /> */}
                    <input className="" type="number" name="surface-max" value="" placeholder="min" />
                    </p>


                    <p>
                     <label></label>
                     {/* <input className="flat-feedback-input" type="text" name="surface" value={this.state.flat.surface} onChange={(event) => this.handleChangeState(event)} placeholder="Superficie construida" /> */}
                    <input className="" type="number" name="surface" value="" placeholder="max" />
                    </p>
                    
                    <p>
                     <label></label>
                    <input className="" type="number" name="rooms" value="" placeholder="hab" />
                    </p>

                    <p>
                     <label></label>
                    <input className="" type="number" name="bathrooms" value="" placeholder="baños" />
                    </p>





                </form>

            </Modal>
        </div>
    
        )
    
      }

}


export default SearchForm