const express = require('express');
const router = express.Router();
const moviesController = require('./movies.controller');
const multer = require('multer');
const upload = multer({dest:'public/images'});

router.get('/', moviesController.getMovies);
router.get('/:id', moviesController.getMovie);
router.post('/', upload.single('myImage'), moviesController.createMovie);
router.put('/:id', upload.single('myImage') ,moviesController.editMovie);
router.delete('/:id', moviesController.delMovie);


module.exports = router;
