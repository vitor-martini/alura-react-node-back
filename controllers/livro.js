const { getAllLivros } = require("../services/livro")

function getLivros (req, res){
  const livros = getAllLivros()

  if(livros){
    res.send(livros)
    return
  }

  res.status(404)
  res.send("Arquivo não encontrado")
}

module.exports = {
  getLivros
}