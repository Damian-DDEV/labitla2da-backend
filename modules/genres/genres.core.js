const genresRepository = require('./genres.repository');


const genresCore = {

    getGenres: async () => {
        const genres = genresRepository.getGenres();
        return genres;
    },

    getGenre: async (id) => {
        const genre = await genresRepository.getGenre(id);
        return genre;
    },

    createGenre: async (genre) => {
        const genreCreated = await genresRepository.createGenre(genre);
        return genreCreated;
    },

    editGenre: async (genre, id) => {
        const genreEdited = await genresRepository.editGenre(genre, id);
        return genreEdited;
    },

    delGenre: async (id) => {
        const delGenre = await genresRepository.delGenre(id);
        return delGenre;
    }
}

module.exports = genresCore;