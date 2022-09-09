const directorsRepository = require('./directors.repository');


const directorsCore = {

    getDirectors: async () => {
        const directors = directorsRepository.getDirectors();
        return directors;
    },

    getDirector: async () => {
        const director = await directorsRepository.getDirector();
        return director;
    },
    createDirector: async (director) => {
        const directorCreated = await directorsRepository.createDirector(director);
        return directorCreated;
    },

    editDirector: async (director, id) => {
        const directorCreated = await directorsRepository.editDirector(director, id);
        return directorCreated;
    },

    delDirector: async (id) => {
        const delDirector = await directorsRepository.delDirector(id);
        return delDirector;
    }
}

module.exports = directorsCore;