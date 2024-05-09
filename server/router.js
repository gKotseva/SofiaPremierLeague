const router = require('express').Router()
const klasatsiiController = require('./controllers/klasatsiiController.js')

router.use('/api/klasatsii', klasatsiiController)


module.exports = router