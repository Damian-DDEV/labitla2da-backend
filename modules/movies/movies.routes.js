const express = require('express');
const router = express.Router();
const moviesController = require('./movies.controller');
const multer = require('multer');
const upload = multer({dest:'public/images'});
multerConfig = upload.fields([{name: 'myImage', maxCount: 1}, {name: 'myImage2', maxCount: 1}])


router.get('/', moviesController.getMovies);
router.get('/:id', moviesController.getMovie);
router.post('/', multerConfig, moviesController.createMovie);
router.put('/:id', multerConfig ,moviesController.editMovie);
router.delete('/:id', moviesController.delMovie);


module.exports = router;
