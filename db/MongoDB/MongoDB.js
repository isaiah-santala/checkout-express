const mongoose = require('mongoose')
mongoose.connect('mongodb://mongo:27017/SDCitems', { useMongoClient: true })

const SDCitemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  description1: String,
  description2: String,
  imageurl: String
})

exports.SDCitems = mongoose.model('SDCitems', SDCitemSchema)