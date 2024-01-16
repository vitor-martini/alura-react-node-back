const express = require("express")
const rotaLivro = require("./routes/livro")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))
const port = 8000

app.use('/livros', rotaLivro)

app.listen(port, () => {
  console.log(`Listen on port ${port}`)
})