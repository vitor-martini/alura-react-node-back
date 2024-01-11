const { Router } = require("express")
const { getLivros } = require("../controllers/livro")

const router = Router()

router.get('/', getLivros)

router.post('/', (req, res) => {
  res.send("POST na rota dos livros")
})

router.patch('/', (req, res) => {
  res.send("PATCH na rota dos livros")
})

router.delete('/', (req, res) => {
  res.send("DELETE na rota dos livros")
})
module.exports = router
