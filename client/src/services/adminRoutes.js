import axios from 'axios'

export default class adminroutes {
    constructor(){

        this.service=axios.create({
        baseURL:'http://localhost:3000/api/',
        withCredentials: true
        })
    }

    addFlat = (flat) => {
        return this.service.post('introducirPiso', flat)
        .then(flat => {return flat})
        .catch(err => {console.log (err)})
    }




}