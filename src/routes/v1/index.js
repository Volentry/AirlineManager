const express = require('express');
const router = express.Router();
const {infoController} = require('../../controllers')
router.get('/info', infoController.info);
const airplaneroutes = require('./airplane-routes')
router.use('/airplanes',airplaneroutes)
const cityroutes = require('./city-routes')
router.use('/cities',cityroutes)
const airportroutes = require('./airport-routes')
router.use('/airports',airportroutes)
const flightroutes = require('./flight-routes')
router.use('/flights',flightroutes)
module.exports = router;

