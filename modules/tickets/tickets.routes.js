const express = require('express');
const router = express.Router();

const ticketsController = require('./tickets.controller');
router.get('/', ticketsController.getTickets);
router.get('/:id', ticketsController.getTicket);
router.get('/user/:dni', ticketsController.getTicketsByDni);
router.post('/', ticketsController.createTicket);
router.put('/:id', ticketsController.editTicket);
router.delete('/:id', ticketsController.delTicket);


module.exports = router;
