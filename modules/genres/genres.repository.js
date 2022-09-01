const Model = require("../../models");

const genresRepository = {
  getGenres: async () => {
    let genres = Model.Genres.findAll();
    return genres;
  },

  getGenre: async () => {
    let genre = await Model.Genres.getMovie();
    return genre;
  },

  createGenre: async () => {
    let genreCreated = await Model.Genres.create();
    return genreCreated;
  },

  editGenre: async () => {
    let genreEdited = await Model.Genres.editMovie();
    return genreEdited;
  },

  delGenre: async () => {
    let delGenre = await Model.Genres.delMovie();
    return delGenre;
  },
};

module.exports = genresRepository;
