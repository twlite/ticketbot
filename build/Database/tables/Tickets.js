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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GenericTable_1 = __importDefault(require("./GenericTable"));
class Tickets extends GenericTable_1.default {
    createTicket(ticket) {
        return __awaiter(this, void 0, void 0, function* () {
            ticket.createdAt = new Date();
            yield this.collection.insertOne(ticket);
            return ticket._id;
        });
    }
    getTicket(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.collection.findOne({ _id });
        });
    }
    getTickets() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.collection.find({ currentID: { $exists: false } }).toArray();
        });
    }
    getTicketsByUser(userID) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.collection.find({ userID }).toArray();
        });
    }
    updateTicket(_id, newContent) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection.update({ _id }, { $set: {
                    content: newContent,
                    createdAt: new Date()
                } });
        });
    }
    deleteTicket(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection.remove({ _id });
        });
    }
}
exports.default = Tickets;
