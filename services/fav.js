const fs = require("fs")
const { getDataFromJSON } = require("../utils/utils")
const { getBookById } = require("./book")
const favsFile = "favs.json"

function getAllFavs() {
  return getDataFromJSON(favsFile)
}

function getFavById(id){
  const favs = getAllFavs()
  return favs.filter(x => x.id === id)[0]
}

function destroyFav(id) {
  let favs = getAllFavs()
  favs = favs.filter(x => x.id !== id)
  fs.writeFileSync(favsFile, JSON.stringify(favs))
}

function addFav(id){
  let favs = getAllFavs()
  const newFavBook = getBookById(id)
  favs.push(newFavBook)
  fs.writeFileSync(favsFile, JSON.stringify(favs))
}

module.exports = {
  getAllFavs,
  getFavById,
  destroyFav,
  addFav,
}