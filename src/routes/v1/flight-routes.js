const express = require('express');
const { Airportmiddleware, Flightmiddleware } = require('../../middlewares');
const { airportController, flightController } = require('../../controllers');
const router = express.Router()
router.post('/',Flightmiddleware.validateCreateRequest,flightController.createFlight)
router.get('/',flightController.getAllFlights)
module.exports = router