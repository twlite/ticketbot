"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const commands = __importStar(require("./commands"));
const commandMap = new Map();
for (const command of Object.values(commands)) {
    if (!command.aliases) {
        command.aliases = [];
    }
    if (!command.help) {
        command.help = '';
    }
    commandMap.set(command.name, command);
    for (const alias of command.aliases) {
        commandMap.set(alias, command);
    }
}
exports.default = commandMap;
