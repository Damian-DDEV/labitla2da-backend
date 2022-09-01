const Model = require("../../models/");

const ticketsRepository = {
  getTickets: async () => {
    let tickets = Model.Tickets.findAll();
    return tickets;
  },

  getTicket: async () => {
    let ticket = await Model.Tickets.getMovie();
    return ticket;
  },

  createTicket: async () => {
    let ticketCreated = await Model.Tickets.create();
    return ticketCreated;
  },

  editTicket: async () => {
    let ticketEdited = await Model.Tickets.editMovie();
    return ticketEdited;
  },

  delTicket: async () => {
    let delTicket = await Model.Tickets.delTicket();
    return delTicket;
  },
};

module.exports = ticketsRepository;
