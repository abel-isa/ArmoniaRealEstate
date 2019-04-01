import axios from "axios"

export default class authService {

    constructor() {

        this.service = axios.create({
            baseURL: "http://localhost:3000/api/",
            withCredentials: true
        })
    }


    loggedin = () => {
        return this.service.get('/loggedin')
            .then(response => response.data)
    }
    
    login = (username, password) => {
        return this.service.post('/login', { username, password })
            .then(response => response.data)
    }

    logout = () => {
        return this.service.post('/logout', {})
            .then(response => response.data)
    }


}