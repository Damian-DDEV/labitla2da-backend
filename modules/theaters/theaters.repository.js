const Model = require("../../models");

const theatersRepository = {
  getTheaters: async () => {
    let theaters = Model.Movies.findAll();
    return theaters;
  },

  getTheater: async () => {
    let theater = await Model.Movies.getMovie();
    return theater;
  },

  createTheater: async () => {
    let theaterCreated = await Model.Movies.create();
    return theaterCreated;
  },

  editTheater: async () => {
    let theaterEdited = await Model.Movies.editMovie();
    return theaterEdited;
  },

  delTheater: async () => {
    let delTheater = await Model.Movies.delMovie();
    return delTheater;
  },
};

module.exports = theatersRepository;
