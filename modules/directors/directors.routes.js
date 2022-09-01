const express = require('express');
const router = express.Router();

const directorsController = require('./directors.controller');
router.get('/', directorsController.getDirectors);
router.get('/:id', directorsController.getDirector);
router.post('/', directorsController.createDirector);
router.put('/:id', directorsController.editDirector);
router.delete('/:id', directorsController.delDirector);


module.exports = router;
