const faker = require('faker')
const coolImages = require("cool-images")
const { generateItem } = require('./generateItem')

exports.generatePostgresImages = (startID, endID, startItemID) => {
  let items = ''
  let incrementItemId = 0
  let itemInfo = generateItem()

  for (let c = startID; c < endID; c++) {
    if (incrementItemId === 5) {
      startItemID = startItemID + 1
      incrementItemId = 0
      itemInfo = generateItem()
    }

    items += `\n${c},${itemInfo},${coolImages.one()},${startItemID}`
    incrementItemId = incrementItemId + 1
  }
  return items
}
