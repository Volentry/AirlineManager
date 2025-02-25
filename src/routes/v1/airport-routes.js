const express = require('express');
const { Airportmiddleware } = require('../../middlewares');
const { airportController } = require('../../controllers');
const router = express.Router()
router.post('/',Airportmiddleware.validateCreateRequest,airportController.createAirport)
router.get('/',airportController.getAirports)
router.get('/:id',airportController.getAirport)
router.delete('/:id',airportController.destroyAirport)
router.patch('/:id',airportController.patchAirport)
module.exports = router