//Aquí va nodemailer

const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.post('/send-email', (req, res) => {

    let {name, phone, email, postalCode, text} = req.body

    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'isarg@gmail.com', //solicitar mail cliente para info de clientes potenciales.no usar una personal por privacidad
            pass: 'isarg'
        }
    })

    transporter.sendMail({
        from: 'Nuevo cliente!!!!! <info@armoniarealestate.com>',
        to: email,
        subject: subject,
        text: message
    })
        .then(info => res.render('mensaje confirmado', { name, phone, email, postalCode, text }))
        .catch(e => console.log(e))
})

module.exports = router

