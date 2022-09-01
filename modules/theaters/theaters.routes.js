const express = require('express');
const router = express.Router();

const theatersController = require('./theaters.controller');
router.get('/', theatersController.getTheaters);
router.get('/:id', theatersController.getTheater);
router.post('/', theatersController.createTheater);
router.put('/:id', theatersController.editTheater);
router.delete('/:id', theatersController.delTheater);


module.exports = router;
