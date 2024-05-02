const router = require('express').Router()
const klasatsiiController = require('./controllers/klasatsiiController')

router.use('/api/klasatsii', klasatsiiController)

module.exports = router