const directorsCore = require("./directors.core");

const directorsController = {
  getDirectors: async (req, res, next) => {
    try {
      const getDirectors = await directorsCore.getDirectors();
      if (getDirectors) return res.status(200).send(getDirectors);
      else return res.status(404).send(`No directors found`);
    } catch (error) {
      return next(error);
    }
  },

  getDirector: async (req, res, next) => {
    try {
      const getDirector = await directorsCore.getDirector();
      if (getDirector) return res.status(200).send(getDirector);
      else return res.status(404).send(`Director not found`)
    } catch (error) {
      return next(error);
    }
  },

  createDirector: async (req,res,next) => {
    const director = req.body;
    try {
        const directorCreated = await directorsCore.createDirector(director);
        return res.status(201).send(directorCreated);
    } catch (error) {
        return next(error);
    }
  },

  editDirector: async (req, res, next) => {
    const director = req.body;
    const id = req.params;
    try {
      const editDirector = await directorsCore.editDirector(director, id);
      if (editDirector) return res.status(200).send(editDirector);
      else return res.status(404).send(`Director not found`)
    } catch (error) {
      return next(error);
    }
  },

  delDirector: async (req, res, next) => {
    const id = req.params.id;
    try {
      const delDirector = await directorsCore.delDirector(id);
      if (delDirector) return res.status(200).send(`Director successfully removed`);
      else return res.status(404).send(`Director not found`);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = directorsController;
