const Model = require("../../models/");

const moviesRepository = {
  getMovies: async () => {
      let movies = await Model.Movies.findAll({
        include: ["genre", "director"]
      });
      return movies;
  },

  getMovie: async (id) => {
    let movie = await Model.Movies.findOne({ 
      where: { id },
      include: ["genre", "director"]
    });
    return movie;
  },

  createMovie: async (movie) => {
      let movieCreated = await Model.Movies.create(movie);
      return movieCreated;
  },

  editMovie: async (movie, id, img) => {
    let movieEdited = await Model.Movies.findOne(id);
    if (movieEdited) return Model.Movies.update(movie, { where: id });
    
  },

  delMovie: async (id) => {
    let delMovie = await Model.Movies.destroy({ where: { id } });
    return delMovie;
  },
};

module.exports = moviesRepository;
