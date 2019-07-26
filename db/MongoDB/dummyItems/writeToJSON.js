const { generateMongoItems } = require('./generateMongoItems')
const { writeFile } = require('fs')

const path = __dirname + '/items.json'
const items = JSON.stringify(generateMongoItems(10000000, 5))

writeFile(path, items, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});


