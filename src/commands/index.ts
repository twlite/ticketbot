import { Command } from './Command';
import * as commands from './commands';

const commandMap: Map<string, Command> = new Map();
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

export default commandMap;
