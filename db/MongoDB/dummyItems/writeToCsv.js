const { generateMongoItems } = require('./generateMongoItems')
const { writeFile } = require('fs')

// writeFile(path, items, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });
const writeFileAsync = async (path, items) => {
  return await new Promise((resolve, reject) => {
    writeFile(path, items, async (err, data) => {
      err ? reject(err) : resolve(JSON.parse(data))
    })
  })
}

let count = 0
let stop = false
while(count < 10 && !stop) {
  const items = 'id,name,price,description1,description2,imageurl \n' + generateMongoItems(1, 5)
  const path = __dirname + '/items.csv'
  writeFileAsync(path, items)
  .then(() =>  {
    count = count + 1
    console.log('COUNT!!!!!!' + count)
  })
  .catch((err) => {
    console.log(err)
    stop = true
  })
}

