const theatersCore = require("./theaters.core");

let theatersController = {
  getTheaters: async (req, res, next) => {
    try {
      let getTheaters = await theatersCore.getTheares();
      return res.status(200).send(getTheaters);
    } catch (error) {
      return next(error);
    }
  },

  getTheater: async (req, res, next) => {
    try {
      let getTheater = await theatersCore.getTheater();
      return res.status(200).send(getTheater);
    } catch (error) {
      return next(error);
    }
  },

  createTheater: async (req,res,next) => {
    try {
        let theaterCreated = await theatersCore.createTheater();
        return res.status(201).send(theaterCreated);
    } catch (error) {
        return next(error);
    }
  },

  editTheater: async (req, res, next) => {
    try {
      let theaterEdited = await theatersCore.editTheater();
      return res.status(200).send(theaterEdited);
    } catch (error) {
      return next(error);
    }
  },

  delTheater: async (req, res, next) => {
    try {
      let delTheater = await theatersCore.delTheater();
      return res.status(200).send(delTheater);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = theatersController;
