const directorsRepository = require('./directors.repository');


const directorsCore = {

    getDirectors: async () => {
        let directors = directorsRepository.getDirectors();
        return directors;
    },

    getDirector: async () => {
        let director = await directorsRepository.getDirector();
        return director;
    },
    createDirector: async (director) => {
        let directorCreated = await directorsRepository.createDirector(director);
        return directorCreated;
    },

    editDirector: async (director, id) => {
        let directorCreated = await directorsRepository.editDirector(director, id);
        return directorCreated;
    },

    delDirector: async (id) => {
        let delDirector = await directorsRepository.delDirector(id);
        return delDirector;
    }
}

module.exports = directorsCore;