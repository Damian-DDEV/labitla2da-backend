const Model = require("../../models/");

const directorsRepository = {
  getDirectors: async () => {
    let directors = Model.Directors.findAll();
    return directors;
  },

  getDirector: async (id) => {
    let director = await Model.Directors.findOne({ where: { id } });
    return director;
  },

  createDirector: async (director) => {
    let directorCreated = await Model.Directors.create(director);
    return directorCreated;
  },

  editDirector: async (director, id) => {
    let idDirector=id.id
    let directorEdited = await Model.Directors.findOne(id);
    if (directorEdited) return Model.Directors.update(director, { where: { id:idDirector } });
  },

  delDirector: async (id) => {
      let delDirector = await Model.Directors.destroy({ where: { id } });
      return delDirector;
  },
};

module.exports = directorsRepository;
