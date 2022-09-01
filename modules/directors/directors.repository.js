const Model = require("../../models/");

const directorsRepository = {
  getDirectors: async () => {
    let directors = Model.Movies.findAll();
    return directors;
  },

  getDirector: async () => {
    let director = await Model.Movies.getMovie();
    return director;
  },

  createDirector: async () => {
    let directorCreated = await Model.Movies.create();
    return directorCreated;
  },

  editDirector: async () => {
    let directorEdited = await Model.Movies.editMovie();
    return directorEdited;
  },

  delDirector: async () => {
    let delDirector = await Model.Movies.del();
    return delDirector;
  },
};

module.exports = directorsRepository;
