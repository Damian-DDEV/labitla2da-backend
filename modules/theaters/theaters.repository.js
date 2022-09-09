const Model = require("../../models");

const theatersRepository = {
  getTheaters: async () => {
    const theaters = Model.Theaters.findAll({
      include: ["shows"]
    });
    return theaters;
  },

  getTheater: async (id) => {
    const theater = await Model.Theaters.findOne({ where: { id } });
    return theater;
  },

  createTheater: async (theater) => {
    const theaterCreated = await Model.Theaters.create(theater);
    return theaterCreated;
  },

  editTheater: async (theater, id) => {
    const getTheater = await Model.Theaters.findOne(id);
    if (getTheater) return await Model.Theaters.update(theater, { where: { id } });
  },

  delTheater: async (id) => {
    const delTheater = await Model.Theaters.destroy({ where: { id } });
    return delTheater;
  },
};

module.exports = theatersRepository;
