const theatersRepository = require('./theaters.repository');


const theatersCore = {

    getTheaters: async () => {
        let theaters = theatersRepository.getTheaters();
        return theaters;
    },

    getTheater: async (id) => {
        let theater = await theatersRepository.getTheater(id);
        return theater;
    },
    createTheater: async (theater) => {
        let theaterCreated = await theatersRepository.createTheater(theater);
        return theaterCreated;
    },

    editTheater: async (theater, id) => {
        let theaterEdited = await theatersRepository.editTheater(theater, id);
        return theaterEdited;
    },

    delTheater: async (id) => {
        let delTheater = await theatersRepository.delTheater(id);
        return delTheater;
    }
}

module.exports = theatersCore;