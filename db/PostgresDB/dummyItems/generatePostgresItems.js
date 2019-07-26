const faker = require('faker')

exports.generatePostgresItems = (startID, endID) => {
  let items = ''
  for (let c = startID; c < endID; c++) {
    items += `\n${c},${faker.commerce.productName()},${faker.commerce.price()},${faker.lorem.sentence()},${faker.lorem.sentence()}}`
  }
  return items
}

