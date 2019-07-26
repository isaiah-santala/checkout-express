const coolImages = require("cool-images")

exports.generateImages = (number) => {
  let images = []
  for (let c = 0; c < number; c++) {
    images.push(coolImages.one())
  }
  return images
}
