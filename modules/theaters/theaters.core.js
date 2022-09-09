const theatersRepository = require('./theaters.repository');


const theatersCore = {

    getTheaters: async () => {
        const theaters = theatersRepository.getTheaters();
        return theaters;
    },

    getTheater: async (id) => {
        const theater = await theatersRepository.getTheater(id);
        return theater;
    },
    createTheater: async (theater) => {
        const theaterCreated = await theatersRepository.createTheater(theater);
        return theaterCreated;
    },

    editTheater: async (theater, id) => {
        const theaterEdited = await theatersRepository.editTheater(theater, id);
        return theaterEdited;
    },

    delTheater: async (id) => {
        const delTheater = await theatersRepository.delTheater(id);
        return delTheater;
    }
}

module.exports = theatersCore;