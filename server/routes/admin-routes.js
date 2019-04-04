const express = require('express');
const router = express.Router();

const Piso = require('../models/Piso')
const News = require('../models/News')
const uploader = require('../configs/cloudinary')



// router.post("/modificar/:nuestroSaco", (req, res) => { // http://localhost:3000/api/modificar/345678
//   const nuestroSaco = req.params.nuestroSaco // nuestroSaco = 345678
// })

router.post('/introducirPiso', uploader.array("imageUrl"), (req, res) => {
    const piso = { title, description, gallery, price, rooms, surface, terrace, heating, bathrooms, houseSize, parking, build, type, reference, state, floor, distrit, neighbourhood } = req.body
    //midelware cloudinary. para lasm fotos req.file
    if (req.files) {
        piso.gallery = req.files.map((file) => file.secure_url);
    }
    const clean = (string) => {
        string = string.trim()
        string = string.charAt(0).toUpperCase() + string.slice(1)
        return string;
    }
    if (piso.distrit || piso.neighbourhood) {
        piso.distrit = clean(piso.distrit)
        piso.neighbourhood = clean(piso.neighbourhood)
    }

    const newPiso = new Piso(piso)
    newPiso.save()
        .then((piso) => {
            res.json({ msg: 'El piso se ha introducido', piso })
        })

})

router.post('/introducirNoticia', uploader.single("imageUrl"), (req, res) => {
    const news = { title, description } = req.body
    news.img = req.file.secure_url
    //idem fotos
    const newNews = new News(news)
    newNews.save(news)
        .then((news) => {
            res.json({ msg: 'el anuncio se ha subido', news })
        })

})




module.exports = router;


