
const {Schema, model} = require("mongoose")

const pisoSchema = new Schema({
  title: String,
  description: String,
  gallery: [], 
  price: Number,
  rooms: Number,
  surface: Number,
  terrace: Number,
  heating: String,
  bathrooms: Number,
  houseSize: Number,
  parking: String,
  build: String,
  type: String,
  reference:String,
  state:String,
  floor:String,
  distrit:String,
  neighbourhood:String,
  location: { type: { type: String }, coordinates: [Number] }
}, {
    timestamps: true
})

// pisoSchema.index({ location: '2dsphere' })

const Piso = model("Piso", pisoSchema)

module.exports = Piso