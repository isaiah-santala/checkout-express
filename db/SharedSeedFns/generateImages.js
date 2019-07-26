const coolImages = require("cool-images")

// exports.generateImages = (number) => {
//   let images = []
//   for (let c = 0; c < number; c++) {
//     images.push(coolImages.one())
//   }
//   return images
// }

exports.generateImages = (number) => {
  let images = ''
  for (let c = 0; c < number; c++) {
    if (images.length === 0) images += coolImages.one()
    images += ',' + coolImages.one()
  }
  return `"${images}"`
}
