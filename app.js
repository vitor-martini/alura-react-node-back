const express = require("express")
const rotaLivro = require("./routes/livro")

const app = express()
app.use(express.json())
const port = 8000

app.use('/livros', rotaLivro)

app.listen(port, () => {
  console.log(`Listen on port ${port}`)
})