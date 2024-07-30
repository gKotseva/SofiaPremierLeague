const router = require('express').Router()
const klasatsiiController = require('./controllers/klasatsiiController.js')
const hallOfFameController = require('./controllers/hallOfFameController.js')
const adminController = require('./controllers/adminController.js')
const controller = require('./controllers/controller.js')


router.use('/api/klasatsii', klasatsiiController)
router.use('/api/hall-of-fame', hallOfFameController)
router.use('/api/admin', adminController)
router.use('/api', controller)


module.exports = router