const Model = require("../../models/");

const directorsRepository = {
  getDirectors: async () => {
    const directors = Model.Directors.findAll();
    return directors;
  },

  getDirector: async (id) => {
    const director = await Model.Directors.findOne({ where: { id } });
    return director;
  },

  createDirector: async (director) => {
    const directorCreated = await Model.Directors.create(director);
    return directorCreated;
  },

  editDirector: async (director, id) => {
    const idDirector=id.id
    const directorEdited = await Model.Directors.findOne(id);
    if (directorEdited) return Model.Directors.update(director, { where: { id:idDirector } });
  },

  delDirector: async (id) => {
      const delDirector = await Model.Directors.destroy({ where: { id } });
      return delDirector;
  },
};

module.exports = directorsRepository;
