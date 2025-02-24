const express = require('express');
const { airplaneController } = require('../../controllers');
const { Airplanemiddlewares } = require('../../middlewares');
const router = express.Router();

router.post('/',
    Airplanemiddlewares.validateCreateRequest,
    airplaneController.createAirplane)
module.exports = router

router.get('/',airplaneController.getAirplanes)