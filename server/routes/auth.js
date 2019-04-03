const express = require('express') // lo que usas para crear un servidor
const router = express.Router()

const passport = require('passport')




router.post('/login', (req, res, next) => {
    console.log("entra")
    passport.authenticate('local', (err, theAdmin, failureDetails) => {
        if (err) {
            res.status(500).json({ message: 'Algo va mal con la autentificación del administrador' })
            return;
        }

        if (!theAdmin) {
            // "failureDetails" contains the error messages
            // from our logic in "LocalStrategy" { message: '...' }.
            res.status(401).json(failureDetails)
            return
        }


        
        // save user in session
        req.login(theAdmin, (err) => {
            if (err) {
                res.status(500).json({ message: 'Algo ha ido mal.' })
                return

            }

            // We are now logged in (that's why we can also send req.user)
            res.status(200).json(theAdmin);
        })
    })(req, res, next)
})


router.post('/logout', (req, res, next) => {
    // req.logout() is defined by passport
    req.logout()
    res.status(200).json({ message: 'Log out success!' })
})


router.get('/loggedin', (req, res, next) => {
    // req.isAuthenticated() is defined by passport
    if (req.isAuthenticated()) {
        res.status(200).json(req.user)
        return
    }
    res.status(403).json({ message: 'No has inicado sesión' })
});



module.exports = router;
