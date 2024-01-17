const express = require("express")
const booksRoute = require("./routes/books")
const favoritesRoute = require("./routes/favs")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({origin: "*"}))
const port = 8000

app.use('/books', booksRoute)
app.use('/favs', favoritesRoute)

app.listen(port, () => {
  console.log(`Listen on port ${port}`)
})