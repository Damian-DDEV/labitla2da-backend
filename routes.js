let express = require('express');
let router = express.Router();

const usersRouter = require('./modules/users/users.routes');
const moviesRouter = require('./modules/movies/movies.routes');
const contactRouter = require('./modules/contact/contact.routes');
const directorRouter = require('./modules/directors/directors.routes');
const genreRouter = require('./modules/genres/genres.routes');
const ticketRouter = require('./modules/tickets/tickets.routes');
const theaters = require('./modules/theaters/theaters.routes');

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.use('/contact', contactRouter);
router.use('/directors', directorRouter);
router.use('/genres', genreRouter);
router.use('/tickets', ticketRouter);
router.use('/theater', theaters);


module.exports = router; 