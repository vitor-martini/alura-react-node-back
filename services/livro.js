const fs = require("fs")

function getAllLivros() {
  const arquivoLivros = "livros.json"
  if(!fs.existsSync(arquivoLivros))
    return null

  return JSON.parse(fs.readFileSync("livros.json"))
}

module.exports = {
  getAllLivros
}