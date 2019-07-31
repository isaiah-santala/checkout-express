const faker = require('faker')

exports.generateItem = (startID, endID) => `${faker.commerce.productName()},${faker.commerce.price()},${faker.lorem.sentence()},${faker.lorem.sentence()}`
