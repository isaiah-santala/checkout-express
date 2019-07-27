const faker = require('faker')
const coolImages = require("cool-images")

exports.generatePostgresImages = (startID, endID, startItemID) => {
  let items = ''
  let incrementItemId = 0
  for (let c = startID; c < endID; c++) {
    if (incrementItemId === 5) {
      startItemID = startItemID + 1
      incrementItemId = 0
    }
    items += `\n${c},${coolImages.one()},${startItemID}`
    incrementItemId = incrementItemId + 1
  }

  return items
}
