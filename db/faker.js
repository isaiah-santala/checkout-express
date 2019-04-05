const faker = require('faker');

const getSeedData = (seedVolum)=>{
    let output ='';
    for(var i = 0; i < seedVolum;i++){
        output = output.concat(`
        {
            id: ${i+1},
            name: "${faker.commerce.productAdjective()} ${faker.commerce.product()}",
            price: "${faker.commerce.price()}",
            description1: "${faker.lorem.sentence()}, ${faker.lorem.sentence()},${faker.lorem.sentence()},${faker.lorem.sentence()}",
            description2: "${faker.lorem.paragraph()}",
            imageurl: "${faker.image.imageUrl()}, ${faker.image.imageUrl()}, ${faker.image.imageUrl()}, ${faker.image.imageUrl()}, ${faker.image.imageUrl()}"
        },`)
    }
    return output.slice(0,output.length-1)
}

// console.log(getSeedData(2))

module.exports.getSeedData = getSeedData
module.exports.test = function(){console.log('connection to faker established')}


