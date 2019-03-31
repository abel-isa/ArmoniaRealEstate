


require("dotenv").config();
const mongoose = require("mongoose")
const Admin = require('../models/Admin')
const bcrypt = require('bcryptjs')


mongoose.connect(process.env.DB,{ useNewUrlParser: true })
.then(() => {
  console.log("connect to mongoose")
})

.then(() => {

    const salt = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync("isarg", salt);

    return Admin.insertMany([
       {email: "isarg@gmail.com",
        password: hashPass} 
    ])

})

.then((admin) => {
  console.log(admin);
  mongoose.connection.close()
})


