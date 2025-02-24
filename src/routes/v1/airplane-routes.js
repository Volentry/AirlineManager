const express = require('express');
const { airplaneController } = require('../../controllers');
const { Airplanemiddlewares } = require('../../middlewares');
const router = express.Router();

router.post('/',
    Airplanemiddlewares.validateCreateRequest,
    airplaneController.createAirplane)
 router.get('/',airplaneController.getAirplanes)
router.get('/:id',airplaneController.getAirplane)
router.delete('/:id',airplaneController.destroyAirplane)
module.exports = router

