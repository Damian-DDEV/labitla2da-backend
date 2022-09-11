const ticketsRepository = require('./tickets.repository');
const transporter = require ('../../config/email');
const Model = require("../../models/");


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
        let showEdited = await Model.Shows.findByPk(ticket.id_show, {include: { all: true, nested: true }})
        const ticketCreated = await ticketsRepository.createTicket(ticket,showEdited);
        showEdited.dataValues.date_time=showEdited.dataValues.date_time
        let time=showEdited.dataValues.date_time.toLocaleTimeString("es-ES").slice(0,5)
        let date=showEdited.dataValues.date_time.toLocaleDateString("es-ES")
        if (ticketCreated) {
            const mailOptions = {
                from: "Remitente",
                to: `${ticket.email}`,
                subject: "Enviado",
                text: "Tu codigo para la funcion de las "+time+", el dia "+date+", Sala "+showEdited.theaters.name+" para la pelicula "+showEdited.movies.name+", es "+ticketCreated.code+", recuerda llevar tu dni para canjear la entrada al cine.     ¡¡¡Te esperamos!!!"
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