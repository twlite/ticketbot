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
const mongodb_1 = require("mongodb");
const Tickets_1 = __importDefault(require("./tables/Tickets"));
class Database {
    constructor(config) {
        this.config = config;
    }
    bootstrap() {
        return __awaiter(this, void 0, void 0, function* () {
            this.dbConn = yield mongodb_1.MongoClient.connect(this.config.url, {
                useUnifiedTopology: true
            });
            this.db = this.dbConn.db(this.config.dbName);
            this.tickets = new Tickets_1.default(this.db.collection('tickets'));
        });
    }
}
exports.default = Database;
