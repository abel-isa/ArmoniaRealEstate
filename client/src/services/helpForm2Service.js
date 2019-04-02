import axios from 'axios'

export default class HelpForm2Service {

    constructor(){

        this.service=axios.create({
        baseURL:'http://localhost:3000/api/',
        withCredentials: true
        })
    }

    sendEmail = (helpForm2) => {
        return this.service.post('send-email', helpForm2)
        .then(helpForm2 => {return helpForm2.data})
        .catch(err => {console.log (err)})
    }


}