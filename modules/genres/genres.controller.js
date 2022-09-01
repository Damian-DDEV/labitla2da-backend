const genresCore = require("./genres.core");

let genresController = {
  getGenres: async (req, res, next) => {
    try {
      let getGenres = await genresCore.getGenres();
      return res.status(200).send(getGenres);
    } catch (error) {
      return next(error);
    }
  },

  getGenre: async (req, res, next) => {
    try {
      let getGenre = await genresCore.getGenre();
      return res.status(200).send(getGenre);
    } catch (error) {
      return next(error);
    }
  },

  createGenre: async (req,res,next) => {
    let genre = req.body;
    try {
        let genreCreated = await genresCore.createGenre(genre);
        return res.status(201).send(genreCreated);
    } catch (error) {
        return next(error);
    }
  },

  editGenre: async (req, res, next) => {
    let genre = req.body;
    let id = req.params;
    try {
      let genreEdited = await genresCore.editGenre(genre, id);
      return res.status(200).send(`The ${genre.name} genre was successfully modified`);
    } catch (error) {
      return next(error);
    }
  },

  delGenre: async (req, res, next) => {
    let id = req.params;
    try {
      let delGenre = await genresCore.delGenre(id);
      return res.status(200).send(delGenre);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = genresController;
