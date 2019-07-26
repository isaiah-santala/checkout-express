const faker = require('faker')
const { generateImages } = require('../../SharedSeedFns/generateImages')

// exports.generateMongoItems = (numberOfItems, numberOfImagesPerItem) => {
//   const items = []
//   for (let c = 0; c < numberOfItems; c++) {
//     items.push({
//       id: c,
//       name: faker.commerce.productName(),
//       price: faker.commerce.price(),
//       description1: faker.lorem.sentence(),
//       description2: faker.lorem.sentence(),
//       imageurl: generateImages(numberOfImagesPerItem)
//     })
//   }
exports.generateMongoItems = (numberOfItems, numberOfImagesPerItem) => {
  let items = ''
  for (let c = 0; c < numberOfItems; c++) {
    if (items.length === 0) items += `${c},${faker.commerce.productName()},${faker.commerce.price()},${faker.lorem.sentence()},${faker.lorem.sentence()},${generateImages(numberOfImagesPerItem)}`
    else items += `\n${c},${faker.commerce.productName()},${faker.commerce.price()},${faker.lorem.sentence()},${faker.lorem.sentence()},${generateImages(numberOfImagesPerItem)}`
  }
  return items
}

