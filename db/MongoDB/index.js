const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/SDCitems', { useNewUrlParser: true })

const SDCitemSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  description1: String,
  description2: String,
  imageurl: Array
})

exports.SDCitems = mongoose.model('SDCitems', SDCitemSchema)