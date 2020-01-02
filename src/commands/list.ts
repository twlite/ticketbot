import { Command } from './Command';
import { dateToString } from '../util';

export const listCommand: Command = {
  name: 'list',
  execute: ({ db, msg }) =>
    db.tickets.getTicketsByUser(msg.author.id).then(tickets => ({
      title: 'Open Tickets',
      ...(tickets.length === 0 ? {
        description: 'You have no open tickets.'
      } : {
        fields: tickets
          .sort((a, b) => a._id - b._id)
          .map(ticket => ({
            name: `Ticket #${ticket._id}`,
            value: `_Created/last edited at ${dateToString(ticket.createdAt)}_\n\n${ticket.content}`
          })).slice(-25)
      })
    }))
};
