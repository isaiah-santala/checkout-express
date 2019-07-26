const faker = require('faker')
const { generateImages } = require('../../SharedSeedFns/generateImages')

exports.generateMongoItems = (startID, endID, numberOfImagesPerItem) => {
  let items = ''
  for (let c = startID; c < endID; c++) {
    items += `\n${c},${faker.commerce.productName()},${faker.commerce.price()},${faker.lorem.sentence()},${faker.lorem.sentence()},${generateImages(numberOfImagesPerItem)}`
  }
  return items
}

