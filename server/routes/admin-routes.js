const express = require('express');
const router = express.Router();

const Piso = require('../models/Piso')


// router.post("/modificar/:nuestroSaco", (req, res) => { // http://localhost:3000/api/modificar/345678
//   const nuestroSaco = req.params.nuestroSaco // nuestroSaco = 345678
// })

router.post('/introducirPiso',(req, res) => {
    const {title,description,gallery,price,rooms,surface,terrace,heating,bathrooms,houseSize,parking,build,type,location} = req.body
    Piso.save({title,description,gallery,price,rooms,surface,terrace,heating,bathrooms,houseSize,parking,build,type,location})
    .then(()=>{
        res.json()
    })
   
})

router.post('/introducirNoticia',(req, res) => {
    const {img,title,description,} = req.body
    Noticia.save({img,title,description,})
    .then(()=>{
        res.json()
    })
   
})






module.exports = router;


