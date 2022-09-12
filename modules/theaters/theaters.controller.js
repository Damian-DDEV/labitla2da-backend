const theatersCore = require("./theaters.core");

const theatersController = {
  getTheaters: async (req, res, next) => {
    try {
      const getTheaters = await theatersCore.getTheaters();
      if (getTheaters) return res.status(200).send(getTheaters);
      else return res.status(404).send(`No movie theaters found`);
    } catch (error) {
      return next(error);
    }
  },

  getTheater: async (req, res, next) => {
    const id = req.params.id;
    try {
      const getTheater = await theatersCore.getTheater(id);
      if (getTheater) return res.status(200).send(getTheater);
      else return res.status(404).send(`The movie theater was not found`);
    } catch (error) {
      return next(error);
    }
  },

  createTheater: async (req, res, next) => {
    const theater = req.body;
    try {
      const theaterCreated = await theatersCore.createTheater(theater);
      return res.status(201).send(theaterCreated);
    } catch (error) {
      return next(error);
    }
  },

  editTheater: async (req, res, next) => {
    const theater = req.body;
    const id = req.params;
    try {
      const theaterEdited = await theatersCore.editTheater(theater, id);
      if (theaterEdited)
        return res
          .status(200)
          .send(`The theater has been successfully modified`);
      else return res.status(404).send(`The movie theater was not found`);
    } catch (error) {
      return next(error);
    }
  },

  delTheater: async (req, res, next) => {
    const id = req.params.id;
    try {
      const delTheater = await theatersCore.delTheater(id);
      if (delTheater)
        return res.status(200).send(`Theater successfully removed`);
      else return res.status(404).send(`No movie theaters found`);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = theatersController;
