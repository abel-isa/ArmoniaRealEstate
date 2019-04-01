import axios from 'axios'

export default class seeFlats {
    constructor(){
        this.service = axios.create({
            baseURL:'http://localhost:3000/api/',
            withCredentials: true            
        })
    }

    getFlat = () => {
        return this.service.get('home')
        .then(response => {return response.data})
        .catch(err => {console.log(err)})
    }

}

//creamos una clas epafra jacer la comunic de front  a back. 
//creamos un metedodo de la clase q es quien se encarga de hacer la llamada al back. la cual nos devuelve los pisos . quien nos devuelve los pisos es back. 
// en app instacianciamos (new..) y lo llamamos (debajo del render()) 
