const moviesRepository = require("./movies.repository");

const moviesCore = {
  getMovies: async () => {
    let movies = moviesRepository.getMovies();
    return movies;
  },

  getMovie: async (id) => {
    let movie = await moviesRepository.getMovie(id);
    return movie;
  },

  createMovie: async (movie) => {
    let movieCreated = await moviesRepository.createMovie(movie);
    return movieCreated;
  },

  editMovie: async (movie, id) => {
    let editMovie = await moviesRepository.editMovie(movie, id);
    return editMovie;
  },

  delMovie: async (id) => {
    let delMovie = await moviesRepository.delMovie(id);
    return delMovie;
  },
};

module.exports = moviesCore;
