const {Schema, model} = require("mongoose")



const noticiaSchema = new Schema({
    img: String,
    title: String, 
    description: Number,
  }, {
      timestamps: true
  })

const Noticia = model("Noticia", noticiaSchema)

