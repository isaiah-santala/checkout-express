const { generatePostgresItems } = require('./generatePostgresItems')
const { appendFileSync } = require('fs')

const writeToItemsCsv = (numberOfRecords) => {
  const path = __dirname + '/items.csv'

  for (let c = 0; c < numberOfRecords; c++) {
    const items = generatePostgresItems(c * 100000, c * 100000 + 100000)
    appendFileSync(path, items, (err) => {
      if (err) throw err
    })
  }
  console.log('file saved!')
}

console.log(writeToItemsCsv(100))

