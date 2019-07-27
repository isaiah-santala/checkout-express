const { generateMongoItems } = require('./generateMongoItems')
const { appendFileSync } = require('fs')

const writeToCsv = (numberOfRecords, itemsPerRecord, imagesPerItem) => {
  const path = __dirname + '/items.csv'

  for (let c = 0; c < numberOfRecords; c++) {
    const items = generateMongoItems(c * itemsPerRecord, c * itemsPerRecord + itemsPerRecord, imagesPerItem)
    appendFileSync(path, items, (err) => {
      if (err) throw err
    })
  }
  console.log('file saved!')
}

console.log(writeToCsv(100, 100000, 5))

