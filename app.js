const express = require("express")
const rotaLivro = require("./routes/books")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))
const port = 8000

app.use('/books', rotaLivro)

app.listen(port, () => {
  console.log(`Listen on port ${port}`)
})