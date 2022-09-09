const showsCore = require("./shows.core");

const showsController = {
  getShows: async (req, res, next) => {
    try {
      const getShows = await showsCore.getShows();
      if (getShows) return res.status(200).send(getShows);
      else return res.status(404).send(`No available functions found`);
    } catch (error) {
      return next(error);
    }
  },

  getShow: async (req, res, next) => {
    try {
      const getShow = await showsCore.getShow();
      if (getShow) return res.status(200).send(getShow);
      else return res.status(404).send(`No available functions found`);
    } catch (error) {
      return next(error);
    }
  },
  getShowDate: async (req, res, next) => {
    const date_time = req.body.date_time;
    const theater = req.body.theater;
    try {
      const getShows = await showsCore.getShowDate(date_time,theater);
      if (getShows) return res.status(200).send(getShows);
      else res.status(400).send(`No available functions found`); 
    } catch (error) {
      
    }
  },
  createShow: async (req,res,next) => {
    const show = req.body;
    try {
        const showCreated = await showsCore.createShow(show);
        return res.status(201).send(showCreated);
    } catch (error) {
        return next(error);
    }
  },

  editShow: async (req, res, next) => {
    const show = req.body;
    const id = req.params;
    try {
      const showEdited = await showsCore.editShow(show, id);
      if (showEdited) return res.status(200).send(`The show has been successfully modified`);
      else return res.status(404).send(`No available functions found`);
    } catch (error) {
      return next(error);
    }
  },

  delShow: async (req, res, next) => {
    const id = req.params;
    try {
      const delShow = await showsCore.delShow(id);
      if (delShow) return res.status(200).send(`Show successfully removed`);
      else return res.status(404).send(`No available functions found`);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = showsController;
