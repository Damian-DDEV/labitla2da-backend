const express = require('express');
const router = express.Router();

const showsController = require('./shows.controller');
router.get('/', showsController.getShows);
router.get('/:id', showsController.getShow);
router.post('/', showsController.createShow);
router.put('/:id', showsController.editShow);
router.delete('/:id', showsController.delShow);


module.exports = router;
