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
    createDirector: async () => {
        let directorCreated = await directorsRepository.createDirector();
        return directorCreated;
    },

    editDirector: async () => {
        let directorCreated = await directorsRepository.editDirector();
        return directorCreated;
    },

    delDirector: async () => {
        let delDirector = await directorsRepository.delDirector();
        return delDirector;
    }
}

module.exports = directorsCore;