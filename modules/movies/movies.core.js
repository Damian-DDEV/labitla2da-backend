const moviesRepository = require("./movies.repository");
const fs = require('fs');
const enviroment = 'http://127.0.0.1:3000/'

const moviesCore = {
  getMovies: async () => {
    let movies = await moviesRepository.getMovies();
    // Recorro las imagenes para setearle el path segun corresponda el enviroment
    // TODO: Ver como tomar el ip de cada enviromente con el process.env
    movies.forEach(movie => {
      movie.path_img = enviroment + movie.path_img;
    });
    return movies;
  },

  getMovie: async (id) => {
    let movie = await moviesRepository.getMovie(id);
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
    let movieCreated = await moviesRepository.createMovie(movie);
    return movieCreated;
  },

  editMovie: async (movie, id, img) => {
    if(img){
      fs.renameSync(img.path, img.path+'.'+img.mimetype.split('/')[1]);
      //Enviamos la ruta a la db para cuando haga el get.
      movie.path_img = img.destination.split('/')[1]+'/'+img.filename+'.'+img.mimetype.split('/')[1]
    }
    movie.path_img = enviroment + movie.path_img;
    let editMovie = await moviesRepository.editMovie(movie, id, img);
    return editMovie;
  },

  delMovie: async (id) => {
    let delMovie = await moviesRepository.delMovie(id);
    return delMovie;
  },

  uploadimg: async (img) => {
    let upimg = await moviesRepository.uploadimg();
    return upimg; 
  }
};

module.exports = moviesCore;
