const showsCore = require("./shows.core");

let showsController = {
  getShows: async (req, res, next) => {
    try {
      let getShows = await showsCore.getShows();
      if (getShows) return res.status(200).send(getShows);
      else return res.status(404).send(`No available functions found`);
    } catch (error) {
      return next(error);
    }
  },

  getShow: async (req, res, next) => {
    try {
      let getShow = await showsCore.getShow();
      if (getShow) return res.status(200).send(getShow);
      else return res.status(404).send(`No available functions found`);
    } catch (error) {
      return next(error);
    }
  },
  getShowDate: async (req, res, next) => {
    let date_time = req.body;
    try {
      let getShows = await showsCore.getShowDate(date_time);
      if (getShows) return res.status(200).send(getShows);
      else res.status(400).send(`No available functions found`); 
    } catch (error) {
      
    }
  },
  createShow: async (req,res,next) => {
    let show = req.body;
    try {
        let showCreated = await showsCore.createShow(show);
        return res.status(201).send(showCreated);
    } catch (error) {
        return next(error);
    }
  },

  editShow: async (req, res, next) => {
    let show = req.body;
    let id = req.params;
    try {
      let showEdited = await showsCore.editShow(show, id);
      if (showEdited) return res.status(200).send(`The show has been successfully modified`);
      else return res.status(404).send(`No available functions found`);
    } catch (error) {
      return next(error);
    }
  },

  delShow: async (req, res, next) => {
    let id = req.params;
    try {
      let delShow = await showsCore.delShow(id);
      if (delShow) return res.status(200).send(`Show successfully removed`);
      else return res.status(404).send(`No available functions found`);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = showsController;
