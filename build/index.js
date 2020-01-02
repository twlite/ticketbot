"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("./Database"));
const Client_1 = __importDefault(require("./Client"));
const util_1 = require("./util");
const config = util_1.loadConfig();
new Client_1.default(Object.assign(Object.assign({}, config.clientConfig), { db: new Database_1.default(config.dbConfig) })).connect();
