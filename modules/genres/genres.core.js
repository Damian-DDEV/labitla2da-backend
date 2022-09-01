const genresRepository = require('./genres.repository');


const genresCore = {

    getGenres: async () => {
        let genres = genresRepository.getGenres();
        return genres;
    },

    getGenre: async () => {
        let genre = await genresRepository.getGenre();
        return genre;
    },

    createGenre: async () => {
        let genreCreated = await genresRepository.createGenre();
        return genreCreated;
    },

    editGenre: async () => {
        let genreEdited = await genresRepository.editGenre();
        return genreEdited;
    },

    delGenre: async () => {
        let delGenre = await genresRepository.delGenre();
        return delGenre;
    }
}

module.exports = genresCore;