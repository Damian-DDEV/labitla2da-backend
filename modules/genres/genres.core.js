const genresRepository = require('./genres.repository');


const genresCore = {

    getGenres: async () => {
        let genres = genresRepository.getGenres();
        return genres;
    },

    getGenre: async (id) => {
        let genre = await genresRepository.getGenre(id);
        return genre;
    },

    createGenre: async (genre) => {
        let genreCreated = await genresRepository.createGenre(genre);
        return genreCreated;
    },

    editGenre: async (genre, id) => {
        let genreEdited = await genresRepository.editGenre(genre, id);
        return genreEdited;
    },

    delGenre: async (id) => {
        let delGenre = await genresRepository.delGenre(id);
        return delGenre;
    }
}

module.exports = genresCore;