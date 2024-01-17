const { Router } = require("express")
const { getFavs, postFav, deleteFav} = require("../controllers/favs")

const router = Router()

router.get('/', getFavs)

router.post('/:id', postFav)

router.delete('/:id', deleteFav)

module.exports = router
