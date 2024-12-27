const Ticket = require('./Ticket')
const {readFile, writeFile} = require('./utils')

class TicketColection{
  constructor() {
    this.tickets = []
  }
}