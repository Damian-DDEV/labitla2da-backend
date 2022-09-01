const ticketsCore = require("./tickets.core");

let ticketsController = {
  getTickets: async (req, res, next) => {
    try {
      let getTickets = await ticketsCore.gettickets();
      return res.status(200).send(getTickets);
    } catch (error) {
      return next(error);
    }
  },

  getTicket: async (req, res, next) => {
    try {
      let getTicket = await ticketsCore.getTicket();
      return res.status(200).send(getTicket);
    } catch (error) {
      return next(error);
    }
  },

  createTicket: async (req,res,next) => {
    try {
        let ticketCreated = await ticketsCore.createTicket();
        return res.status(201).send(ticketCreated);
    } catch (error) {
        return next(error);
    }
  },

  editTicket: async (req, res, next) => {
    try {
      let ticketEdited = await ticketsCore.editTicket();
      return res.status(200).send(ticketEdited);
    } catch (error) {
      return next(error);
    }
  },

  delTicket: async (req, res, next) => {
    try {
      let delTicket = await ticketsCore.delTicket();
      return res.status(200).send(delTicket);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = ticketsController;
