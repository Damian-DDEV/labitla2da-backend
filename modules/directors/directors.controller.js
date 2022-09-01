const directorsCore = require("./directors.core");

let directorsController = {
  getDirectors: async (req, res, next) => {
    try {
      let getDirectors = await directorsCore.getDirectors();
      return res.status(200).send(getDirectors);
    } catch (error) {
      return next(error);
    }
  },

  getDirector: async (req, res, next) => {
    try {
      let getDirector = await directorsCore.getDirector();
      return res.status(200).send(getDirector);
    } catch (error) {
      return next(error);
    }
  },

  createDirector: async (req,res,next) => {
    try {
        let directorCreated = await directorsCore.createDirector();
        return res.status(201).send(directorCreated);
    } catch (error) {
        return next(error);
    }
  },

  editDirector: async (req, res, next) => {
    try {
      let editDirector = await directorsCore.editDirector();
      return res.status(200).send(editDirector);
    } catch (error) {
      return next(error);
    }
  },

  delDirector: async (req, res, next) => {
    try {
      let delDirector = await directorsCore.delDirector();
      return res.status(200).send(delDirector);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = directorsController;
