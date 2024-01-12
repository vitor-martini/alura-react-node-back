const fs = require("fs");

function getAllLivros() {
  const arquivoLivros = "livros.json"
  if(!fs.existsSync(arquivoLivros))
    return null

  return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroById(id) {
  const livros = getAllLivros();
  return livros.filter(x => x.id === id)[0];
}

function addLivro(livroNovo) {
  const livros = getAllLivros()
  livros.push(livroNovo)
  fs.writeFileSync("livros.json", JSON.stringify(livros))
}

function updateLivro(id, dadosLivroAlterado){
  let livros = getAllLivros()
  const indiceLivroAlterado = livros.findIndex(x => x.id === id)
  const conteudoAlterado = {...livros[indiceLivroAlterado], ...dadosLivroAlterado}
  livros[indiceLivroAlterado] = conteudoAlterado
  
  fs.writeFileSync("livros.json", JSON.stringify(livros))
}

function destroyLivro(id){
  let livros = getAllLivros()
  livros = livros.filter(x => x.id != id)
  fs.writeFileSync("livros.json", JSON.stringify(livros))
}

module.exports = {
  getAllLivros,
  getLivroById,
  addLivro,
  updateLivro,
  destroyLivro
}
