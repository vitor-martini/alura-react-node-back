const { getAllLivros, getLivroById, addLivro, updateLivro, destroyLivro} = require("../services/livro")

function getLivros (req, res){
  const livros = getAllLivros()

  if(livros){
    res.send(livros)
    return
  }

  res.status(404)
  res.send("Arquivo não encontrado")
}

function getLivro (req, res) {
  const livro = getLivroById(req.params.id)

  if(!livro){
    res.status(404)
    res.send("Livro não encontrado")
    return
  }

  res.send(livro)
}

function postLivro (req, res) {
  addLivro(req.body)
  res.status(201)
  res.send("Livro inserido com sucesso")
}

function patchLivro (req, res) {
  updateLivro(req.params.id, req.body)
  res.status(200)
  res.send("Livro atualizado com sucesso")
}

function deleteLivro (req, res) {
  const livro = getLivroById(req.params.id)

  if(!livro){
    res.status(404)
    res.send("Livro não encontrado")
    return
  }
  
  destroyLivro(req.params.id)
  res.status(200)
  res.send("Livro excluído com sucesso")
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro
}