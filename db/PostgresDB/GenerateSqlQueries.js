const faker = require('faker')
const { GenerateImagesString } = require('../SharedSeedFns/GenerateImagesString')

exports.GenerateSqlQueries = (tableName, numberOfQueries, numberOfImages) => {
  const queries = []
  for (let c = 0; c < numberOfQueries; c++) {
    queries.push(`\
    INSERT INTO ${tableName} (id, name, price, description1, description2, imageurl) \
    VALUES (${c}, ${faker.commerce.productName()}, ${faker.commerce.productName()}, ${faker.commerce.productName()}, ${faker.lorem.sentence()}, ${GenerateImagesString(numberOfImages)})`)
  }
  return queries
}