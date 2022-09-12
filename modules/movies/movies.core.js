const moviesRepository = require("./movies.repository");
const fs = require('fs');
const enviroment = process.env.API_URL;

const moviesCore = {
  getMovies: async (words, id_genre) => {
    const movies = await moviesRepository.getMovies(words, id_genre);
    // Recorro las imagenes para setearle el path segun corresponda el enviroment
    movies.forEach(movie => {
      movie.path_img = enviroment + movie.path_img;
    });
    return movies;
  },

  getMovie: async (id) => {
    const movie = await moviesRepository.getMovie(id);
    movie.path_img = enviroment + movie.path_img;
    return movie;
  },

  createMovie: async (movie, img) => {
    //Pasamos a el mimetype que reciba desde el front, para que lo guarde con el mismo.
    if(img){
      fs.renameSync(img.path, img.path+'.'+img.mimetype.split('/')[1]);
      //Enviamos la ruta a la db para cuando haga el get.
      movie.path_img = img.destination.split('/')[1]+'/'+img.filename+'.'+img.mimetype.split('/')[1]
    }
    const movieCreated = await moviesRepository.createMovie(movie);
    return movieCreated;
  },

  editMovie: async (movie, id, img) => {
    if(img){
      fs.renameSync(img.path, img.path+'.'+img.mimetype.split('/')[1]);
      movie.path_img = img.destination.split('/')[1]+'/'+img.filename+'.'+img.mimetype.split('/')[1]
    }
    const editMovie = await moviesRepository.editMovie(movie, id, img);
    return editMovie;
  },

  delMovie: async (id) => {
    const delMovie = await moviesRepository.delMovie(id);
    return delMovie;
  },
};

module.exports = moviesCore;
