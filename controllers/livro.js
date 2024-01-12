const { getAllLivros, getLivroById, addLivro, updateLivro, destroyLivro} = require("../services/livro")
const { idIsValid } = require("../utils/utils")

function getLivros (req, res){
  try{
    const livros = getAllLivros()

    if(livros){
      res.send(livros)
      return
    }
  
    res.status(404)
    res.send("Arquivo não encontrado")
  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

function getLivro (req, res) {
  try {
    const id = req.params.id;

    if(!idIsValid(id)){
      res.status(422)
      res.send("ID inválido")
      return
    }
    
    const livro = getLivroById(id)

    if(!livro){
      res.status(404)
      res.send("Livro não encontrado")
      return
    }

    res.send(livro)
  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

function postLivro (req, res) {
  try {
    addLivro(req.body)
    res.status(201)
    res.send("Livro inserido com sucesso")
  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

function patchLivro (req, res) {
  try {
    const id = req.params.id
    
    if(!idIsValid(id)){
      res.status(422)
      res.send("ID inválido")
      return
    }

    updateLivro(id, req.body)
    res.status(200)
    res.send("Livro atualizado com sucesso")
  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

function deleteLivro (req, res) {
  try {
    const id = req.params.id

    if(!idIsValid(id)){
      res.status(422)
      res.send("ID inválido")
      return
    }
    
    const livro = getLivroById(id)
    if(!livro){
      res.status(404)
      res.send("Livro não encontrado")
      return
    }
    
    destroyLivro(id)
    res.status(200)
    res.send("Livro excluído com sucesso")
  } catch(error){
    res.status(500)
    res.send(error.message)
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro
}