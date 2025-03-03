const express = require('express');
const { Airportmiddleware, Flightmiddleware } = require('../../middlewares');
const { airportController, flightController } = require('../../controllers');
const router = express.Router()
router.post('/',Flightmiddleware.validateCreateRequest,flightController.createFlight)
router.get('/',flightController.getAllFlights)
router.get('/:id',flightController.getFlight)
router.patch('/:id/seats',Flightmiddleware.validateUpdateRequest,flightController.updateFlightSeats)
module.exports = router