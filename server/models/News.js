const {Schema, model} = require("mongoose")



const newsSchema = new Schema({
    img: String,
    title: String, 
    description: String,
  }, {
      timestamps: true
  })

const News = model("Noticia", newsSchema)

module.exports = News