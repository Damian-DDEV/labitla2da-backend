const genresCore = require("./genres.core");

let genresController = {
  getGenres: async (req, res, next) => {
    try {
      let getGenres = await genresCore.getGenres();
      if (getGenres) return res.status(200).send(getGenres);
      else return res.status(404).send(`No genres found`);
    } catch (error) {
      return next(error);
    }
  },

  getGenre: async (req, res, next) => {
    try {
      let getGenre = await genresCore.getGenre();
      if (getGenre) return res.status(200).send(getGenre);
      else return res.status(404).send(`No genres found`);
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
      if (genreEdited) return res.status(200).send(`The ${genre.name} genre was successfully modified`);
      else return res.status(404).send(`No genres found`);
    } catch (error) {
      return next(error);
    }
  },

  delGenre: async (req, res, next) => {
    let id = req.params;
    try {
      let delGenre = await genresCore.delGenre(id);
      if (delGenre) return res.status(200).send(delGenre);
      else return res.status(404).send(`Genre successfully removed`);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = genresController;
