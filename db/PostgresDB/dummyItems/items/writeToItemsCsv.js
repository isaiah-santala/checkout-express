const { generatePostgresItems } = require('./generatePostgresItems')
const { appendFileSync } = require('fs')

const writeToItemsCsv = (numberOfRecords, itemsPerRecord) => {
  const path = __dirname + '/items.csv'

  for (let c = 0; c < numberOfRecords; c++) {
    const items = generatePostgresItems(c * itemsPerRecord, c * itemsPerRecord + itemsPerRecord)
    appendFileSync(path, items, (err) => {
      if (err) throw err
    })
  }
  console.log('file saved!')
}

console.log(writeToItemsCsv(100, 100000))

