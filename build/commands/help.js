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
exports.helpCommand = {
    name: 'help',
    execute: ({ client, commands }) => __awaiter(void 0, void 0, void 0, function* () {
        return ({
            title: 'Meow! I\'m Gucci',
            description: `Hewwo, ime gucci and ime secretary for the Devs, meow ${Constants_1.Emojis.GUCCI_ROAR}\n\n${[...commands.values()]
                .filter((command, index, self) => self.indexOf(command) === index)
                .map(command => `\`${client.opts.prefix}${command.name}${command.help ? ` ${command.help}` : ''}\``)
                .join('\n')}`
        });
    })
};
