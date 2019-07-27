const { generatePostgresImages } = require('./generatePostgresImages')
const { appendFileSync } = require('fs')

const writeToImagesCsv = (numberOfRecords) => {
  const path = __dirname + '/images.csv'

  for (let c = 0; c < numberOfRecords; c++) {
    const items = generatePostgresImages(c * 500000, c * 500000 + 500000, c * 500000 / 5)
    appendFileSync(path, items, (err) => {
      if (err) throw err
    })
  }
  console.log('file saved!')
}

console.log(writeToImagesCsv(100))

