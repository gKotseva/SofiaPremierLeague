const router = require('express').Router()
const klasatsiiController = require('./controllers/klasatsiiController.js')
const hallOfFameController = require('./controllers/hallOfFameController.js')

router.use('/api/klasatsii', klasatsiiController)
router.use('/api/hall-of-fame', hallOfFameController)


module.exports = router