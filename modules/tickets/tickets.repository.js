const Model = require("../../models/");

const ticketsRepository = {
  getTickets: async () => {
    const tickets = Model.Tickets.findAll();
    return tickets;
  },
  getTicketsByDni: async (dni) => {
    const tickets = Model.Tickets.findAll({  order: [["id", "DESC"]],
    where: { dni:dni.dni },include: { all: true, nested: true }})
    return tickets;
  },

  getTicket: async (id) => {
    const ticket = await Model.Tickets.findOne({ where: { id } });
    return ticket;
  },

  createTicket: async (ticket,showEdited) => {
    if (showEdited){ 
        showEdited.tickets_availables=showEdited.tickets_availables-ticket.quantity
        showEdited.save();
    };
    const ticketCreated = await Model.Tickets.create(ticket);
    return ticketCreated;
  },

  editTicket: async (ticket, id) => {
    const ticketEdited = await Model.Tickets.findOne(id);
    if (ticketEdited) return Model.Tickets.update(ticket, { where: { id } });
  },

  delTicket: async (id) => {
    const delTicket = await Model.Tickets.destroy({ where: { id } });
    return delTicket;
  },
};

module.exports = ticketsRepository;
