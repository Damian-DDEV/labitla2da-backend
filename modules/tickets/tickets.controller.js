const ticketsCore = require("./tickets.core");

let ticketsController = {
  getTickets: async (req, res, next) => {
    try {
      let getTickets = await ticketsCore.getTickets();
      if (getTickets) return res.status(200).send(getTickets);
      else return res.status(404).send(`No tickets found`);
    } catch (error) {
      return next(error);
    }
  },

  getTicket: async (req, res, next) => {
    let id = req.params;
    try {
      let getTicket = await ticketsCore.getTicket(id);
      if(getTicket) return res.status(200).send(getTicket);
      else return res.status(404).send(`Ticket not found`);
    } catch (error) {
      return next(error);
    }
  },

  createTicket: async (req,res,next) => {
    let ticket = req.body;
    try {
        let ticketCreated = await ticketsCore.createTicket(ticket);
        return res.status(201).send(ticketCreated);
    } catch (error) {
        return next(error);
    }
  },

  editTicket: async (req, res, next) => {
    let ticket = req.body;
    let id = req.params;
    try {
      let ticketEdited = await ticketsCore.editTicket(ticket, id);
      if(ticketEdited) return res.status(200).send(`The ticket was successfully modified`);
      else return res.status(404).send(`Ticket not found`);
    } catch (error) {
      return next(error);
    }
  },

  delTicket: async (req, res, next) => {
    let id = req.params;
    try {
      let delTicket = await ticketsCore.delTicket(id);
      if (delTicket) return res.status(200).send(`Ticket successfully removed`);
      else return res.status(404).send(`Ticket not found`);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = ticketsController;
