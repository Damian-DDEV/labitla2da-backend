const ticketsRepository = require('./tickets.repository');


const ticketsCore = {

    getTickets: async () => {
        let tickets = ticketsRepository.getTickets();
        return tickets;
    },

    getTicket: async () => {
        let ticket = await ticketsRepository.getTicket();
        return ticket;
    },
    createTicket: async () => {
        let ticketCreated = await ticketsRepository.createTicket();
        return ticketCreated;
    },

    editTicket: async () => {
        let ticketEdited = await ticketsRepository.editTicket();
        return ticketEdited;
    },

    delTicket: async () => {
        let delTicket = await ticketsRepository.delTicket();
        return delTicket;
    }
}

module.exports = ticketsCore;