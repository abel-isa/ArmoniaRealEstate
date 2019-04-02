//Aquí va nodemailer
require('dotenv').config();

const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.post('/send-email', (req, res) => {
    let {name, phone, email, postalCode, text} = req.body

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.NODEMAILER_USER, //solicitar mail cliente para info de clientes potenciales.no usar una personal por privacidad
            pass: process.env.NODEMAILER_PASS
        }
    })

    transporter.sendMail({
        from: 'Nuevo cliente!!!!! <info@armoniarealestate.com>',
        to: process.env.NODEMAILER_USER,
        subject: 'asdfg',
        text: 'message'
    })
        .then(info => res.json({msg:'mensaje confirmado'}))
        .catch(e => console.log(e))
})

module.exports = router

