const moviesCore = require("./movies.core");

let moviesController = {
  getMovies: async (req, res, next) => {
    try {
      let getMovies = await moviesCore.getMovies();
      return res.status(200).send(getMovies);
    } catch (error) {
      return next(error);
    }
  },

  getMovie: async (req, res, next) => {
    let id = req.body.id || req.params.id;
    try {
      let getMovie = await moviesCore.getMovie(id);
      return res.status(200).send(getMovie);
    } catch (error) {
      return next(error);
    }
  },

  createMovie: async (req, res, next) => {
    let movie = req.body;
    try {
      let movieCreated = await moviesCore.createMovie(movie);
      return res.status(201).send(movieCreated);
    } catch (error) {
      return next(error);
    }
  },

  editMovie: async (req, res, next) => {
    let movie = req.body;
    let id = req.params;
    try {
      await moviesCore.editMovie(movie, id);
      return res.status(200).send(`The ${movie.name} movie was successfully modified`);
    } catch (error) {
      return next(error);
    }
  },

  delMovie: async (req, res, next) => {
    let id = req.params.id;
    try {
      let delMovie = await moviesCore.delMovie(id);
      return res.status(200).send(delMovie);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = moviesController;
