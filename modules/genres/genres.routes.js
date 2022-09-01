const express = require('express');
const router = express.Router();

const genresController = require('./genres.controller');
router.get('/', genresController.getGenres);
router.get('/:id', genresController.getGenre);
router.post('/', genresController.createGenre);
router.put('/:id', genresController.editGenre);
router.delete('/:id', genresController.delGenre);


module.exports = router;
