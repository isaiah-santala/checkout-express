const faker = require('faker')
const coolImages = require("cool-images")

exports.GenerateSqlQueries = (tableName, numberOfQueries) => {
  const queries = []
  for (let c = 0; c < numberOfQueries; c++) {
    queries.push(`
    INSERT INTO ${tableName} (id, name, price, description1, description2, imageurl)
    VALUES (${c}, ${faker.commerce.productName()}, ${faker.commerce.price()}, ${faker.lorem.sentence()}, ${faker.lorem.sentence()}, ${coolImages.one()})
    `)
  }
  return queries
}

console.log(this.GenerateSqlQueries('SDCitems', 3))