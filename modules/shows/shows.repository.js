const Model = require("../../models");
const { Op } = require('sequelize');

const showsRepository = {
  getShows: async () => {
    let shows = Model.Shows.findAll();
    return shows;
  },

  getShow: async (id) => {
    let show = await Model.Shows.findOne({ where: { id } });
    return show;
  },

  getShowDate: async(date) => {
    let getShowDate = await Model.Shows.findAll({
      where: {
        date_time: {
          [Op.like]: [date.date_time]
        } 
      }
    })

    return getShowDate
  },

  createShow: async (show) => {
    let showCreated = await Model.Shows.create(show);
    return showCreated;
  },

  editShow: async (show, id) => {
    let showEdited = await Model.Shows.findOne(id);
    if (showEdited) return Model.Shows.update(show, { where: { id } });
  },

  delShow: async (id) => {
      let delShow = await Model.Shows.destroy({ where: { id } });
      return delShow;
  },
};

module.exports = showsRepository;
