const showsRepository = require('./shows.repository');


const showsCore = {

    getShows: async () => {
        const shows = showsRepository.getShows();
        return shows;
    },

    getShow: async () => {
        const show = await showsRepository.getShow();
        return show;
    },

    getShowDate: async (date,theater) => {
        const getShowDate = await showsRepository.getShowDate(date,theater);
        return getShowDate;
    },
    
    createShow: async (show) => {
        const showCreated = await showsRepository.createShow(show);
        return showCreated;
    },

    editShow: async (show, id) => {
        const showEdited = await showsRepository.editShow(show, id);
        return showEdited;
    },

    delShow: async (id) => {
        const delShow = await showsRepository.delShow(id);
        return delShow;
    }
}

module.exports = showsCore;