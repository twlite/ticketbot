"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
exports.listCommand = {
    name: 'list',
    execute: ({ db, msg }) => db.tickets.getTicketsByUser(msg.author.id).then(tickets => (Object.assign({ title: 'Open Tickets' }, (tickets.length === 0 ? {
        description: 'You have no open tickets.'
    } : {
        fields: tickets
            .sort((a, b) => a._id - b._id)
            .map(ticket => ({
            name: `Ticket #${ticket._id}`,
            value: `_Created/last edited at ${util_1.dateToString(ticket.createdAt)}_\n\n${ticket.content}`
        })).slice(-25)
    }))))
};
