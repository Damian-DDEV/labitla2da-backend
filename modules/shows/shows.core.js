const showsRepository = require('./shows.repository');


const showsCore = {

    getShows: async () => {
        let shows = showsRepository.getShows();
        return shows;
    },

    getShow: async () => {
        let show = await showsRepository.getShow();
        return show;
    },

    getShowDate: async (date) => {
        let getShowDate = await showsRepository.getShowDate(date);
        return getShowDate;
    },
    
    createShow: async (show) => {
        let showCreated = await showsRepository.createShow(show);
        return showCreated;
    },

    editShow: async (show, id) => {
        let showEdited = await showsRepository.editShow(show, id);
        return showEdited;
    },

    delShow: async (id) => {
        let delShow = await showsRepository.delShow(id);
        return delShow;
    }
}

module.exports = showsCore;