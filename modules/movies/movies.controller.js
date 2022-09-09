const moviesCore = require("./movies.core");

let moviesController = {
  getMovies: async (req, res, next) => {
    try {
      let id_genre=null
      if(req.query.id_genre){
      id_genre= req.query.id_genre;
      }
      let words = req.query.title;
      let getMovies = await moviesCore.getMovies(words, id_genre);
      if (getMovies) return res.status(200).send(getMovies);
      else return res.status(404).send(`No movies found`)
    } catch (error) {
      return next(error);
    }
  },

  getMovie: async (req, res, next) => {
    const id = req.params;
    try {
      let getMovie = await moviesCore.getMovie(id);
      if (getMovie) return res.status(200).send(getMovie);
      else return res.status(404).send(`Movie not found`);
    } catch (error) {
      return next(error);
    }
  },

  createMovie: async (req, res, next) => {
    let movie = req.body;
    let img = req.file;

    try {
      let movieCreated = await moviesCore.createMovie(movie, img);
      return res.status(201).send(movieCreated);
    } catch (error) {
      return next(error);
    }
  },

  editMovie: async (req, res, next) => {
    let movie = req.body;
    let id = req.params;
    let img = req.file;
    try {
      let movieEdited = await moviesCore.editMovie(movie, id, img);
      if (movieEdited) return res.status(200).send(`The ${movie.name} movie was successfully modified`);
      else return res.status(404).send(`Movie not found`);
    } catch (error) {
      return next(error);
    }
  },

  delMovie: async (req, res, next) => {
    let id = req.params.id;
    try {
      let delMovie = await moviesCore.delMovie(id);
      if (delMovie) return res.status(200).send(`Movie successfully removed`);
      else res.status(404).send(`Movie not found`)
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = moviesController;
