const Model = require("../../models/");

const moviesRepository = {
  getMovies: async () => {
    let movies = await Model.Movies.findAll();
    return movies;
  },

  getMovie: async ({id}) => {
    let movie = await Model.Movies.findOne(id);
    return movie;
  },

  createMovie: async (movie) => {
    let movieCreated = await Model.Movies.create(movie);
    return movieCreated;
  },

  editMovie: async (movie, id) => {
    let movieEdited = await Model.Movie.findOne(id);
    if (movieEdited) return Model.Movie.update(movie, { where: id });
  },

  delMovie: async () => {
    let delMovie = await Model.Movies.delMovie();
    return delMovie;
  },
};

module.exports = moviesRepository;
