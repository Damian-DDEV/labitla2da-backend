const theatersRepository = require('./theaters.repository');


const theatersCore = {

    getTheaters: async () => {
        let theaters = theatersRepository.getTheaters();
        return theaters;
    },

    getTheater: async () => {
        let theater = await theatersRepository.getTheater();
        return theater;
    },
    createTheater: async () => {
        let theaterCreated = await theatersRepository.createTheater();
        return theaterCreated;
    },

    editTheater: async () => {
        let theaterEdited = await theatersRepository.editTheater();
        return theaterEdited;
    },

    delTheater: async () => {
        let delTheater = await theatersRepository.delTheater();
        return delTheater;
    }
}

module.exports = theatersCore;