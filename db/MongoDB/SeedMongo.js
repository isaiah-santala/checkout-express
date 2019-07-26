const { readJSON } = require('./dummyItems/readJSON')
const { SDCitems } = require('./index')
const path = __dirname + '/dummyItems/items.JSON'

readJSON(path)
.then(items => {
  SDCitems.insertMany(items, (err, response) => {
    if (err) return console.log(err)
    return console.log(response)
  })
})