const coolImages = require("cool-images")

exports.GenerateImagesString = (number) => {
  let str = ''
  for (let c = 0; c < number; c++) {
    if (c + 1 === number) str += coolImages.one()
    else str += coolImages.one() + ', '
  }
  return str
}

// console.log(this.GenerateSqlQueries('SDCitms', 2, 3))
// console.log(this.GenerateMongoItems(3, 3))