const Model = require("../../models/");
const { Op } = require("sequelize");

const moviesRepository = {
  getMovies: async (words, id_genre) => {
      const movies = await Model.Movies.findAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.substring]: words
              }
            },
            {
              id_genre: {
                [Op.eq]: id_genre
              }
            }
          ]
        },
        include: ["genre", "director"]
      });
      return movies;
  },
  getMovie: async (id) => {
    const movie = await Model.Movies.findOne({ 
      where: id,
      include: ["genre", "director"]
    });
    return movie;
  },

  createMovie: async (movie) => {
      const movieCreated = await Model.Movies.create(movie);
      return movieCreated;
  },

  editMovie: async (movie, id, img) => {
    const movieEdited = await Model.Movies.findOne(id);
    if (movieEdited) return Model.Movies.update(movie, { where: id });
    
  },

  delMovie: async (id) => {
    const delMovie = await Model.Movies.destroy({ where: { id } });
    return delMovie;
  },
};

module.exports = moviesRepository;
