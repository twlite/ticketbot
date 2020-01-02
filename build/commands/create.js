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
exports.createCommand = {
    name: 'create',
    help: '<content>',
    execute: ({ client, db, msg, args }) => __awaiter(void 0, void 0, void 0, function* () {
        if (args.length === 0) {
            return `Meow, you cannot send an empty ticket, please try again. ${Constants_1.Emojis.GUCCI_REE}`;
        }
        const ticket = {
            userID: msg.author.id,
            _id: yield db.tickets.getIncrementingID(),
            content: args.join(' '),
            recipients: [
                ...client.opts.recipients,
                yield client.getDMChannel(msg.author.id).then(c => c.id)
            ]
                .filter((channelID, index, self) => self.indexOf(channelID) === index)
                .map(channelID => ({ channelID, messageID: null }))
        };
        yield Promise.all(ticket.recipients.map((recipient, idx) => client.createMessage(recipient.channelID, {
            embed: renderers_1.TicketRenderer.render(ticket, msg.author, renderers_1.TicketRenderer.States.OPEN)
        })
            .then(message => {
            recipient.messageID = message.id;
        })
            .catch(() => {
            ticket.recipients.splice(idx, 1);
        })));
        yield db.tickets.createTicket(ticket);
        return {
            title: `Successfully created ticket #${ticket._id} ${Constants_1.Emojis.GUCCI_SIDEEYE}`,
            fields: [{
                    name: 'Content',
                    value: ticket.content
                }],
            footer: { text: 'You should have received a copy of this ticket in your DMs.' }
        };
    })
};
