const { getAllBooks, getBookById, addBook, updateBook, destroyBook} = require("../services/book")
const { idIsValid } = require("../utils/utils")

function getBooks (req, res){
  try{
    const books = getAllBooks()

    if(books){
      res.send(books)
      return
    }
  
    res.status(404)
    res.send("File not found")
  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

function getBook (req, res) {
  try {
    const id = req.params.id

    if(!idIsValid(id)){
      res.status(422)
      res.send("Invalid ID")
      return
    }
    
    const book = getBookById(id)

    if(!book){
      res.status(404)
      res.send("Book not found")
      return
    }

    res.send(book)
  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

function postBook (req, res) {
  try {
    addBook(req.body)
    res.status(201)
    res.send("Book inserted successfully")
  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

function patchBook (req, res) {
  try {
    const id = req.params.id
    
    if(!idIsValid(id)){
      res.status(422)
      res.send("Invalid ID")
      return
    }

    updateBook(id, req.body)
    res.status(200)
    res.send("Book updated successfully")
  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

function deleteBook (req, res) {
  try {
    const id = req.params.id

    if(!idIsValid(id)){
      res.status(422)
      res.send("Invalid ID")
      return
    }
    
    const book = getBookById(id)
    if(!book){
      res.status(404)
      res.send("Book not found")
      return
    }
    
    destroyBook(id)
    res.status(200)
    res.send("Book deleted successfully")
  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

module.exports = {
  getBooks,
  getBook,
  postBook,
  patchBook,
  deleteBook
}