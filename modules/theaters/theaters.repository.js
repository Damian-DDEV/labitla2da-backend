const Model = require("../../models");

const theatersRepository = {
  getTheaters: async () => {
    let theaters = Model.Theaters.findAll();
    return theaters;
  },

  getTheater: async (id) => {
    let theater = await Model.Theaters.findOne({where: id});
    return theater;
  },

  createTheater: async (theater) => {
    let theaterCreated = await Model.Theaters.create(theater);
    return theaterCreated;
  },

  editTheater: async (theater, id) => {
    let getTheater = await Model.Theaters.findOne(id);
    if (getTheater) return await Model.Theaters.update(theater, { where: id });
  },

  delTheater: async (id) => {
    let delTheater = await Model.Theaters.destroy({ where: id });
    return delTheater;
  },
};

module.exports = theatersRepository;
