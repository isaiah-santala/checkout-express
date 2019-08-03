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

SDC.find({id:1}, (err, data) => {
  
})

exports.SDCitems = mongoose.model('SDCitems', SDCitemSchema)