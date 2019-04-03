require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const nodemailer = require('nodemailer');

const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session)

const cors = require("cors")


const passport = require('passport');
require('./configs/passport')


mongoose
  .connect(process.env.DB, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();


app.use(session({

  secret:process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({ mongooseConnection: mongoose.connection })

}))

app.use(passport.initialize());
app.use(passport.session())



// configuración CORS
const whiteList = ["http://localhost:5000"]
const corsOptions = {
  origin: (origin, cb) => {
    const originIsWhitelisted = whiteList.includes(origin);
    cb(null, originIsWhitelisted)
  },
  credentials: true
}
app.use(cors(corsOptions))




// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


      


app.use(express.static(path.join(__dirname, 'public')))




// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


//rutas
const sendMail = require('./routes/sendMail')
app.use('/api', sendMail)

const home = require('./routes/home')
app.use('/api', home)

const adminRoutes = require('./routes/admin-routes');
app.use('/api', adminRoutes)

const auth = require('./routes/auth')
app.use('/api/admin/auth', auth)

const fileUploadRoute = require('./routes/file-upload-routes')
app.use('/api/admin/noticia', fileUploadRoute)

app.use((re,res,next) => {
  res.sendFile(__dirname + "/public/index.html")
})

module.exports = app;