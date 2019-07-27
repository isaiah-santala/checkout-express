const { generatePostgresImages } = require('./generatePostgresImages')
const { appendFileSync } = require('fs')

const writeToImagesCsv = (numberOfRecords, itemsPerRecord, imagesPerItem) => {
  const path = __dirname + '/images.csv'

  for (let c = 0; c < numberOfRecords; c++) {
    const items = generatePostgresImages(c * itemsPerRecord, c * itemsPerRecord + itemsPerRecord, c * itemsPerRecord / imagesPerItem)
    appendFileSync(path, items, (err) => {
      if (err) throw err
    })
  }
  console.log('file saved!')
}

console.log(writeToImagesCsv(100, 500000, 5))

