const express = require('express');
const { cityController } = require('../../controllers');
const { Citymiddleware } = require('../../middlewares');
const router = express.Router();
router.post('/',Citymiddleware.validateCreateRequest,cityController.createCity)
router.delete('/:id',cityController.destroyCity)
router.patch('/:id',cityController.patchCity)
module.exports = router