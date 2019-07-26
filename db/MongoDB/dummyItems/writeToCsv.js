const { generateMongoItems } = require('./generateMongoItems')
const { appendFileSync } = require('fs')

const writeToCsv = (numberOfRecords) => {
  const path = __dirname + '/items.csv'

  for (let c = 0; c < numberOfRecords; c++) {
    const items = generateMongoItems(c * 100000, c * 100000 + 100000, 5)
    appendFileSync(path, items, (err) => {
      if (err) throw err
    })
  }
  console.log('file saved!')
}

console.log(writeToCsv(100))

