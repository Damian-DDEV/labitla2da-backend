const ticketsCore = require("./tickets.core");

let ticketsController = {
  getTickets: async (req, res, next) => {
    try {
      let getTickets = await ticketsCore.getTickets();
      return res.status(200).send(getTickets);
    } catch (error) {
      return next(error);
    }
  },

  getTicket: async (req, res, next) => {
    let id = req.params;
    try {
      let getTicket = await ticketsCore.getTicket(id);
      return res.status(200).send(getTicket);
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
      await ticketsCore.editTicket(ticket, id);
      return res.status(200).send(`The ticket was successfully modified`);
    } catch (error) {
      return next(error);
    }
  },

  delTicket: async (req, res, next) => {
    let id = req.params;
    try {
      let delTicket = await ticketsCore.delTicket(id);
      return res.status(200).send(delTicket);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = ticketsController;
