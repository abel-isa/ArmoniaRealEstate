const express = require('express');
const router = express.Router();

const Piso = require('../models/Piso')


router.get('/home', (req,res) => {
    Piso.find()
    .then(pisos => res.json(pisos))
    .catch(err => console.log (err))
})








module.exports = router;
