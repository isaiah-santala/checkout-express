const faker = require('faker')
const { GenerateImagesString } = require('./GenerateImagesString')

exports.GenerateMongoItems = (numberOfQueries, numberOfImages) => {
  const items = []
  for (let c = 0; c < numberOfQueries; c++) {
    items.push({
      id: c,
      name: faker.commerce.productName(),
      price: faker.commerce.productName(),
      description1: faker.commerce.productName(),
      description2: faker.commerce.productName(),
      imageurl: GenerateImagesString(numberOfImages)
    })
  }
  return items
}