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
const eris_1 = require("eris");
const commands_1 = __importDefault(require("../commands"));
class TicketBot extends eris_1.Client {
    constructor(opts) {
        super(opts.token, {
            getAllUsers: true
        });
        this.opts = opts;
        this.on('ready', this.onReady);
        this.on('messageCreate', this.onMessage);
    }
    connect() {
        return Promise.all([
            super.connect(),
            this.opts.db.bootstrap()
        ]).then(() => void 0);
    }
    onReady() {
        console.log('ready');
    }
    onMessage(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const guildMember = this
                .guilds.get(this.opts.guildID)
                .members.get(msg.author.id);
            if (msg.author.bot ||
                !guildMember ||
                !guildMember.roles.includes(this.opts.roleID) ||
                (msg.channel.type === 0 && msg.channel.id !== this.opts.channelID) ||
                !msg.content.startsWith(this.opts.prefix)) {
                return;
            }
            const [commandName, ...args] = msg.content.slice(this.opts.prefix.length).split(/\s/g);
            const command = commands_1.default.get(commandName);
            if (!command) {
                return;
            }
            const res = yield command.execute({
                msg,
                args,
                commands: commands_1.default,
                client: this,
                db: this.opts.db
            });
            if (res) {
                msg.channel.createMessage({
                    embed: typeof res === 'object' ? res : { description: res }
                });
            }
        });
    }
}
exports.default = TicketBot;
