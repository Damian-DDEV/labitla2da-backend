const theatersCore = require("./theaters.core");

let theatersController = {
  getTheaters: async (req, res, next) => {
    try {
      let getTheaters = await theatersCore.getTheaters();
      return res.status(200).send(getTheaters);
    } catch (error) {
      return next(error);
    }
  },

  getTheater: async (req, res, next) => {
    let id = req.params;
    try {
      let getTheater = await theatersCore.getTheater(id);
      return res.status(200).send(getTheater);
    } catch (error) {
      return next(error);
    }
  },

  createTheater: async (req,res,next) => {
    let theater = req.body;
    try {
        let theaterCreated = await theatersCore.createTheater(theater);
        return res.status(201).send(theaterCreated);
    } catch (error) {
        return next(error);
    }
  },

  editTheater: async (req, res, next) => {
    let theater = req.body;
    let id = req.params;
    try {
      await theatersCore.editTheater(theater, id);
      return res.status(200).send(`The theater has been successfully modified`);
    } catch (error) {
      return next(error);
    }
  },

  delTheater: async (req, res, next) => {
    let id = req.params
    try {
      let delTheater = await theatersCore.delTheater(id);
      return res.status(200).send(delTheater);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = theatersController;
