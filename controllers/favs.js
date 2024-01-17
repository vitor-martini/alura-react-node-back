const { getAllFavs, destroyFav, addFav, getFavById} = require("../services/fav")
const { idIsValid } = require("../utils/utils")

function getFavs (req, res){
  try{
    const favs = getAllFavs()

    if(favs){
      res.send(favs)
      return
    }
  
    res.status(404)
    res.send("File not found")
  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

function postFav (req, res) {
  try {
    const id = req.params.id

    if(!idIsValid(id)){
      res.status(422)
      res.send("Invalid ID")
      return
    }

    addFav(id)
    res.status(201)
    res.send("Book added as favorite")
  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

function deleteFav (req, res) {
  try {
    const id = req.params.id

    if(!idIsValid(id)){
      res.status(422)
      res.send("Invalid ID")
      return
    }
    
    const fav = getFavById(id)
    if(!fav){
      res.status(404)
      res.send("Favorite not found")
      return
    }
    
    destroyFav(id)
    res.status(200)
    res.send("Favorite deleted successfully")
  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

module.exports = {
  getFavs,
  postFav,
  deleteFav,
}