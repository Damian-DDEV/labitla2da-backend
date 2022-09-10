const moviesRepository = require("./movies.repository");
const fs = require('fs');
const enviroment = process.env.API_URL;
var cloudinary = require('cloudinary').v2;
const tmp = require('tmp')

const moviesCore = {
  getMovies: async (words, id_genre) => {
    const movies = await moviesRepository.getMovies(words, id_genre);
    // Recorro las imagenes para setearle el path segun corresponda el enviroment
    movies.forEach(movie => {
      movie.path_img = movie.path_img;
    });
    return movies;
  },

  getMovie: async (id) => {
    const movie = await moviesRepository.getMovie(id);
    movie.path_img = movie.path_img;
    return movie;
  },
/*
  createMovie: async (movie, img) => {
    //Pasamos a el mimetype que reciba desde el front, para que lo guarde con el mismo.
    if(img){
      fs.renameSync(img.path, img.path+'.'+img.mimetype.split('/')[1]);
      //Enviamos la ruta a la db para cuando haga el get.
      movie.path_img = img.destination.split('/')[1]+'/'+img.filename+'.'+img.mimetype.split('/')[1]
    }
    const movieCreated = await moviesRepository.createMovie(movie);
    return movieCreated;
  },*/

  createMovie: async (movie, img) => {
    if(img){

      const options = {
        use_filename: false,
        unique_filename: false,
        overwrite: true,
      };
      try {
        const result = await cloudinary.uploader.upload(img.path, options);
        console.log(result);
        movie.path_img = ("https://res.cloudinary.com/clawgames/image/upload/"+result.public_id)
        console.log(movie.path_img)
      } catch (error) {
        console.error(error);
      }
    }
    const movieCreated = await moviesRepository.createMovie(movie);
    return movieCreated;
  },

  editMovie: async (movie, id, img) => {
    if(img){
      const options = {
        use_filename: false,
        unique_filename: false,
        overwrite: true,
      };
      try {
        const result = await cloudinary.uploader.upload(img.path, options);
        movie.path_img = ("https://res.cloudinary.com/clawgames/image/upload/"+result.public_id)
      } catch (error) {
        console.error(error);
      }
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
