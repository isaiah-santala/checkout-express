const { generateMongoItems } = require('./generateMongoItems')
const { writeFile } = require('fs')

const path = __dirname + '/items.csv'
const items = generateMongoItems(10, 5)

writeFile(path, items, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});


