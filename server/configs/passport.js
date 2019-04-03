const Admin = require('../models/Admin')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const passport = require('passport')

passport.serializeUser((loggedInUser, cb) => {
    cb(null, loggedInUser._id)
})

passport.deserializeUser((userIdFromSession, cb) => {
    Admin.findById(userIdFromSession, (err, userDocument) => {
        if (err) {
            cb(err)
            return
        }
        cb(null, userDocument)
    })
})

passport.use(new LocalStrategy((username, password, next) => {
    console.log(username, password)
    Admin.findOne({ email:username }, (err, foundAdmin) => {
        if (err) {
            next(err)
            return
        }

        if (!foundAdmin || !bcrypt.compareSync(password, foundAdmin.password)) {
            next(null, false, { message: 'Email o Contraseña incorrectas' })
            return
        }


        next(null, foundAdmin)
    })
}))
