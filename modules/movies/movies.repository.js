const Model = require("../../models/");
const { Op } = require("sequelize");

const moviesRepository = {
  getMovies: async (words, id_genre) => {
      let conditions  = [{}];
      if(id_genre!=null){
        conditions.push({id_genre:id_genre});
        }
      if(words!=null || words==""){
        conditions.push({name: {[Op.substring]:words}})
      }
      let movies = await Model.Movies.findAll({
        where:conditions,
        include: { all: true, nested: true }
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
