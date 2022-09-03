const directorsCore = require("./shows.core");

let directorsController = {
  getShows: async (req, res, next) => {
    try {
      let getShows = await directorsCore.getShows();
      return res.status(200).send(getShows);
    } catch (error) {
      return next(error);
    }
  },

  getShow: async (req, res, next) => {
    try {
      let getShow = await directorsCore.getShow();
      return res.status(200).send(getShow);
    } catch (error) {
      return next(error);
    }
  },

  createShow: async (req,res,next) => {
    let show = req.body;
    try {
        let showCreated = await directorsCore.createShow(show);
        return res.status(201).send(showCreated);
    } catch (error) {
        return next(error);
    }
  },

  editShow: async (req, res, next) => {
    let show = req.body;
    let id = req.params;
    try {
      await directorsCore.editShow(show, id);
      return res.status(200).send(`The show has been successfully modified`);;
    } catch (error) {
      return next(error);
    }
  },

  delShow: async (req, res, next) => {
    let id = req.params;
    try {
      let delShow = await directorsCore.delShow(id);
      console.log(delShow)
      return res.status(200).send(delShow);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = directorsController;
