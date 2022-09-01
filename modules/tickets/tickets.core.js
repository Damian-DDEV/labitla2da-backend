const ticketsRepository = require('./tickets.repository');


const ticketsCore = {

    getTickets: async () => {
        let tickets = ticketsRepository.getTickets();
        return tickets;
    },

    getTicket: async (id) => {
        let ticket = await ticketsRepository.getTicket(id);
        return ticket;
    },
    createTicket: async (ticket) => {
        let ticketCreated = await ticketsRepository.createTicket(ticket);
        return ticketCreated;
    },

    editTicket: async (ticket, id) => {
        let ticketEdited = await ticketsRepository.editTicket(ticket, id);
        return ticketEdited;
    },

    delTicket: async (id) => {
        let delTicket = await ticketsRepository.delTicket(id);
        return delTicket;
    }
}

module.exports = ticketsCore;