const genresCore = require("./genres.core");

const genresController = {
  getGenres: async (req, res, next) => {
    try {
      const getGenres = await genresCore.getGenres();
      if (getGenres) return res.status(200).send(getGenres);
      else return res.status(404).send(`No genres found`);
    } catch (error) {
      return next(error);
    }
  },

  getGenre: async (req, res, next) => {
    const id = req.params;
    try {
      const getGenre = await genresCore.getGenre(id);
      if (getGenre) return res.status(200).send(getGenre);
      else return res.status(404).send(`No genres found`);
    } catch (error) {
      return next(error);
    }
  },

  createGenre: async (req,res,next) => {
    const genre = req.body;
    try {
        const genreCreated = await genresCore.createGenre(genre);
        return res.status(201).send(genreCreated);
    } catch (error) {
        return next(error);
    }
  },

  editGenre: async (req, res, next) => {
    const genre = req.body;
    const id = req.params;
    try {
      const genreEdited = await genresCore.editGenre(genre, id);
      if (genreEdited) return res.status(200).send(`The ${genre.name} genre was successfully modified`);
      else return res.status(404).send(`No genres found`);
    } catch (error) {
      return next(error);
    }
  },

  delGenre: async (req, res, next) => {
    const id = req.params.id;
    try {
      const delGenre = await genresCore.delGenre(id);
      if (delGenre) return res.status(200).send(delGenre);
      else return res.status(404).send(`Genre successfully removed`);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = genresController;
