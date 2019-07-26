const { readFile } = require('fs')

exports.readJSON = async (path) => {
  return await new Promise((resolve, reject) => {
    readFile(path, async (err, data) => {
      err ? reject(err) : resolve(JSON.parse(data))
    })
  })
}



