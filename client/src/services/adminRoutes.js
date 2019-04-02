import axios from 'axios'

export default class adminroutes {
    constructor(){

        this.service=axios.create({
        baseURL:'http://localhost:3000/api/',
        withCredentials: true
        })
    }

    addFlat = (flats) => {
        const addFlatsForm = new FormData()
        Object.keys(flats).forEach(keyFlats =>{
            if(keyFlats == "img"){
                flats.img.forEach(img => {
                    addFlatsForm.append("imageUrl", img) 
                })
            } else {
                addFlatsForm.append(keyFlats, flats[keyFlats])
            }
        })
        return this.service.post('introducirPiso', addFlatsForm)
        .then(flat => {return flat})
        .catch(err => {console.log (err)})
    }

    addNew = (news) => {
        const addNewsForm = new FormData();
        Object.keys(news).forEach(keyNews => {
            if(keyNews == "img"){
                addNewsForm.append("imageUrl", news.img)
            } else {
                addNewsForm.append(keyNews, news[keyNews])
            }
        })
        // addNewsForm.append("imageUrl", news.img)//crear una nueva propiedad del formData
        // addNewsForm.append("description", news.description)
        // addNewsForm.append("title", news.title)
        return this.service.post('introducirNoticia', addNewsForm)
        .then(news => {return news})
        .catch(err => {console.log(err)})
    }



}