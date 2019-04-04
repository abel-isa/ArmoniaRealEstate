const express = require('express');
const router = express.Router();

const Piso = require('../models/Piso')
const News = require('../models/News')

router.get('/home', (req,res) => {
    Piso.find()
    .then(pisos => res.json(pisos))
    .catch(err => console.log (err))
})




router.get('/detailsFlat/:id', (req, res) => {
    const {id} = req.params
    Piso.findById(id)
    .then(flat => {
        res.json(flat)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);

    })
})

router.get('/news',(req,res) => {
    News.find()
    .then(news => res.json(news))
    .catch(err => console.log(err))
})

router.get('/detailsNews/:id', (req,res) => {
    const {id} = req.params
    News.findById(id)
    .then(news =>{
        res.json(news)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})



module.exports = router;
