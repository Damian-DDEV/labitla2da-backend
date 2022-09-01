const Model = require("../../models/");

const ticketsRepository = {
  getTickets: async () => {
    let tickets = Model.Tickets.findAll();
    return tickets;
  },

  getTicket: async (id) => {
    let ticket = await Model.Tickets.findOne(id);
    return ticket;
  },

  createTicket: async (ticket) => {
    let ticketCreated = await Model.Tickets.create(ticket);
    return ticketCreated;
  },

  editTicket: async (ticket, id) => {
    let ticketEdited = await Model.Tickets.findOne(id);
    if (ticketEdited) return Model.Tickets.update(ticket, { where: id });
  },

  delTicket: async (id) => {
    let delTicket = await Model.Tickets.destroy({where:id});
    return delTicket;
  },
};

module.exports = ticketsRepository;
