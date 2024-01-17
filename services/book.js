const fs = require("fs")
const { getDataFromJSON } = require("../utils/utils")
const booksFile = "books.json"

function getAllBooks() {
  return getDataFromJSON(booksFile)
}

function getBookById(id) {
  const books = getAllBooks()
  return books.filter(x => x.id === id)[0]
}

function addBook(newBook) {
  const books = getAllBooks()
  books.push(newBook)
  fs.writeFileSync(booksFile, JSON.stringify(books))
}

function updateBook(id, newData){
  let books = getAllBooks()
  const modifiedBookIndex = books.findIndex(x => x.id === id)
  const modifiedData = {...books[modifiedBookIndex], ...newData}
  books[modifiedBookIndex] = modifiedData
  
  fs.writeFileSync(booksFile, JSON.stringify(books))
}

function destroyBook(id){
  let books = getAllBooks()
  books = books.filter(x => x.id != id)
  fs.writeFileSync(booksFile, JSON.stringify(books))
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  destroyBook
}
