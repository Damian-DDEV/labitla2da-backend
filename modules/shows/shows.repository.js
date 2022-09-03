const Model = require("../../models");

const showsRepository = {
  getShows: async () => {
    let shows = Model.Shows.findAll();
    return shows;
  },

  getShow: async (id) => {
    let director = await Model.Shows.findOne({ where: id });
    return director;
  },

  createShow: async (director) => {
    let directorCreated = await Model.Shows.create(director);
    return directorCreated;
  },

  editShow: async (show, id) => {
    let showEdited = await Model.Shows.findOne(id);
    if (showEdited) return Model.Shows.update(show, { where: id});
  },

  delShow: async (id) => {
      let delShow = await Model.Shows.destroy({where: id});
      return delShow;
  },
};

module.exports = showsRepository;
