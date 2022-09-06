const Model = require("../../models");
const { Op } = require('sequelize');
const { Sequelize } = require("../../models");

const showsRepository = {
  getShows: async () => {
    let shows = Model.Shows.findAll({order: [
      ["date_time", "ASC"],
    ],});
    return shows;
  },

  getShow: async (id) => {
    let show = await Model.Shows.findOne({ where: { id } });
    return show;
  },

  getShowDate: async(date,theater) => {
    let getShowDate = await Model.Shows.findAll({
      where: {[Op.and] :{
        date_time: {
          [Op.gt]: Sequelize.cast(date.concat(" 00:00:00"), "datetime"),
          [Op.lt]: Sequelize.cast(date.concat(" 23:59:59"), "datetime")
        },
        id_theaters:{
          [Op.eq]: theater
        }
      }}
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
