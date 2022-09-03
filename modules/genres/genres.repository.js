const Model = require("../../models");

const genresRepository = {
  getGenres: async () => {
    let genres = Model.Genres.findAll();
    return genres;
  },

  getGenre: async (id) => {
    let genre = await Model.Genres.findOne({ where: { id } });
    return genre;
  },

  createGenre: async (genre) => {
    try {
      let genreCreated = await Model.Genres.create(genre);
      return genreCreated;
      
    } catch (error) {
      console.log(error)
    }
  },

  editGenre: async (genre, id) => {
    let genreEdited = await Model.Genres.findOne(id);
    if (genreEdited) return Model.Genres.update(genre, { where: { id } });
  },

  delGenre: async (id) => {
    let delGenre = await Model.Genres.destroy({ where: { id } });
    return delGenre;
  },
};

module.exports = genresRepository;
