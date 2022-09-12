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
        console.log(showEdited.dataValues.date_time.toLocaleDateString("es-ES"))
        if (ticketCreated) {
            const mailOptions = {
                from: "Remitente",
                to: `${ticket.email}`,
                subject: `Entrada ${ticketCreated.id}`,
                html: `<!DOCTYPE html>
                <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <meta http-equiv="X-UA-Compatible" />
                  <title>Ticket</title>
                  <style>
                      .cardWrap {
                width: 27em;
                margin: 3em auto;
                color: #fff;
                font-family: sans-serif;
              }

              .card {
                background: linear-gradient(
                  to bottom,
                  #e84c3d 0%,
                  #e84c3d 26%,
                  #ecedef 26%,
                  #ecedef 100%
                );
                height: 11em;
                float: left;
                position: relative;
                padding: 1em;
                margin-top: 100px;
              }

              .cardLeft {
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
                width: 16em;
              }

              .cardRight {
                width: 6.5em;
                border-left: 0.18em dashed #fff;
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
              }

              h1 {
                font-size: 1.1em;
                margin-top: 0;
              }

              span {
                font-weight: normal;
              }
              .title,
              .name,
              .seat,
              .time {
                text-transform: uppercase;
                font-weight: normal;
              }

              h2 {
                font-size: 0.9em;
                color: #525252;
                margin: 0;
              }
              span {
                font-size: 0.7em;
                color: #a2aeae;
              }
              .title {
                margin: 1em 0 0 0;
              }

              .eye {
                position: relative;
                width: 2em;
                height: 1.5em;
                background: #fff;
                margin: 0 auto;
                border-radius: 1em/0.6em;
                z-index: 1;
              }

              .number {
                text-align: center;
                text-transform: uppercase;
              }
              h3 {
                color: #e84c3d;
                margin: 0.9em 0 0 0;
                font-size: 2.5em;
              }
              span {
                display: block;
                color: #a2aeae;
              }

              .barcode {
                height: 2em;
                width: 0;
                margin: 1.2em 0 0 0.8em;
                box-shadow: 1px 0 0 1px #343434, 5px 0 0 1px #343434, 10px 0 0 1px #343434,
                  11px 0 0 1px #343434, 15px 0 0 1px #343434, 18px 0 0 1px #343434,
                  22px 0 0 1px #343434, 23px 0 0 1px #343434, 26px 0 0 1px #343434,
                  30px 0 0 1px #343434, 35px 0 0 1px #343434, 37px 0 0 1px #343434,
                  41px 0 0 1px #343434, 44px 0 0 1px #343434, 47px 0 0 1px #343434,
                  51px 0 0 1px #343434, 56px 0 0 1px #343434, 59px 0 0 1px #343434,
                  64px 0 0 1px #343434, 68px 0 0 1px #343434, 72px 0 0 1px #343434,
                  74px 0 0 1px #343434, 77px 0 0 1px #343434, 81px 0 0 1px #343434;
              }
                  </style>
                </head>
                <body>
                  <div class="cardWrap">
                    <div class="card cardLeft">
                      <h1>Cinemaland </h1>
                      <div class="title">
                          <span>Película</span>
                        <h2>${showEdited.movies.name}</h2>
                      </div>
                      <div class="name">
                        <span>DNI</span>
                        <h2>${ticket.dni}</</h2>
                      </div>
                      <div class="name">
                        <span>Código</span>
                        <h2>${ticketCreated.code}</</h2>
                      </div>
                    </div>
                    <div class="card cardRight">
                      <div class="" style="margin-top: 32px;">
                        <span>Fecha y hora</span>
                        <h2>${date} ${time}</h2>
                      </div>
                    </div>
                  </div>
                </body>
              </html>`
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