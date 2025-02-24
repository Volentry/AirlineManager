const express = require('express');
const router = express.Router();
const {infoController} = require('../../controllers')
router.get('/info', infoController.info);
const airplaneroutes = require('./airplane-routes')
router.use('/airplanes',airplaneroutes)
module.exports = router; // ✅ Correct export
