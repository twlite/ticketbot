import { Command } from './Command';
import { dateToString } from '../util';

export const todoCommand: Command = {
  name: 'todo',
  execute: ({ db }) =>
    db.tickets.getTickets().then(tickets => ({
      title: 'Open Tickets',
      fields: tickets
        .sort((a, b) => a._id - b._id)
        .map(ticket => ({
          name: `Ticket #${ticket._id}`,
          value: `_Created/last edited at ${dateToString(ticket.createdAt)} by <@${ticket.userID}>_\n\n${ticket.content}`
        })).slice(-25)
    }))
};
