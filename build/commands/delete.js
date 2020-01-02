"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = require("../Constants");
const renderers_1 = require("../renderers");
exports.deleteCommand = {
    name: 'delete',
    aliases: ['remove', 'del'],
    help: '<ticket id> [--override]',
    execute: ({ client, msg, args, db }) => __awaiter(void 0, void 0, void 0, function* () {
        if (!args[0]) {
            return `specify a ticket ID and try again ${Constants_1.Emojis.GUCCI_REE}`;
        }
        let override = args.includes('--override') && args.splice(args.indexOf('--override'), 1);
        const ticket = yield db.tickets.getTicket(+args[0]);
        if (!ticket) {
            return `no ticket with ID #${args[0]} ${Constants_1.Emojis.GUCCI_PANIC_2}`;
        }
        if ((ticket.userID !== msg.author.id && !override) &&
            !client.opts.owners.includes(msg.author.id)) {
            return `you don't own this ticket ${Constants_1.Emojis.GUCCI_PANIC_2}\n(run again with \`--override\` to delete the ticket if this was not a mistake)`;
        }
        for (const recipient of ticket.recipients) {
            client.editMessage(recipient.channelID, recipient.messageID, {
                embed: renderers_1.TicketRenderer.render(ticket, client.users.get(ticket.userID), renderers_1.TicketRenderer.States.CLOSED, msg.author)
            }).catch(() => { });
        }
        yield db.tickets.deleteTicket(ticket._id);
        return {
            title: `Deleted ticket #${ticket._id} ${Constants_1.Emojis.GUCCI_SCREAM}`
        };
    })
};
