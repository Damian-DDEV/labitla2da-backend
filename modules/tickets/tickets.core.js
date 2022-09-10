const ticketsRepository = require('./tickets.repository');
const transporter = require ('../../config/email');


const ticketsCore = {

    getTickets: async () => {
        const tickets = ticketsRepository.getTickets();
        return tickets;
    },
    getTicketsByDni: async (dni) => {
        const tickets = ticketsRepository.getTicketsByDni(dni);
        return tickets;
    },

    getTicket: async (id) => {
        const ticket = await ticketsRepository.getTicket(id);
        return ticket;
    },
    createTicket: async (ticket) => {
        const ticketCreated = await ticketsRepository.createTicket(ticket);
        if (ticketCreated) {
            console.log(ticketCreated)
            const mailOptions = {
                from: "Remitente",
                to: `${ticket.email}`,
                subject: "Enviado",
                text: "Tu codigo para la pelicula "+ticketCreated.shows.movies.name+ " es "+ticketCreated.code
            }

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log('error');
                } else {
                    return ticketCreated;
                }
            })
        }
        
    },

    editTicket: async (ticket, id) => {
        const ticketEdited = await ticketsRepository.editTicket(ticket, id);
        return ticketEdited;
    },

    delTicket: async (id) => {
        const delTicket = await ticketsRepository.delTicket(id);
        return delTicket;
    }
}

module.exports = ticketsCore;