const fs = require("fs");

function idIsValid(id) {
  return (id && Number(id))
}

function getDataFromJSON(name){
  if(!fs.existsSync(name))
    return null

  return JSON.parse(fs.readFileSync(name))
}

module.exports = {
  idIsValid,
  getDataFromJSON
}