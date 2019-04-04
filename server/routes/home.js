const express = require('express');
const router = express.Router();

const Piso = require('../models/Piso')


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



module.exports = router;
