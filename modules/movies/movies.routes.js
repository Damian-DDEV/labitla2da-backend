const express = require('express');
const router = express.Router();

const moviesController = require('./movies.controller');
router.get('/', moviesController.getMovies);
router.get('/:id', moviesController.getMovie);
router.post('/', moviesController.createMovie);
router.put('/:id', moviesController.editMovie);
router.delete('/:id', moviesController.delMovie);


module.exports = router;
