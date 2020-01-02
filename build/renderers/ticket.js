"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
var TicketRenderStates;
(function (TicketRenderStates) {
    TicketRenderStates[TicketRenderStates["OPEN"] = 0] = "OPEN";
    TicketRenderStates[TicketRenderStates["CLOSED"] = 1] = "CLOSED";
})(TicketRenderStates || (TicketRenderStates = {}));
;
exports.TicketRenderer = {
    render: (ticket, user, state, closer) => ({
        title: `New ticket: #${ticket._id}`,
        color: state === TicketRenderStates.OPEN ? 0xd48f1c : 0xca2d36,
        fields: [{
                name: 'Ticket creator',
                value: user.username
            }, {
                name: 'Ticket content',
                value: ticket.content
            }, {
                name: 'State',
                value: state === TicketRenderStates.OPEN
                    ? 'Open'
                    : `Closed by ${closer.username} at ${util_1.dateToString(new Date())}`
            }]
    }),
    States: TicketRenderStates,
};
