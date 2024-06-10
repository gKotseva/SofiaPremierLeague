const router = require('express').Router()
const klasatsiiController = require('./controllers/klasatsiiController.js')
const hallOfFameController = require('./controllers/hallOfFameController.js')
const adminController = require('./controllers/adminController.js')


router.use('/api/klasatsii', klasatsiiController)
router.use('/api/hall-of-fame', hallOfFameController)
router.use('/api/admin', adminController)


module.exports = router