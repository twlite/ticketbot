import { Command } from './Command';
import { Emojis } from '../Constants';

export const helpCommand: Command = {
  name: 'help',
  execute: async ({ client, commands }) => ({
    title: 'Meow! I\'m Gucci',
    description: `Hewwo, ime gucci and ime secretary for the Devs, meow ${Emojis.GUCCI_ROAR}\n\n${
      [ ...commands.values() ]
        .filter((command, index, self) => self.indexOf(command) === index)
        .map(command => `\`${client.opts.prefix}${command.name}${command.help ? ` ${command.help}` : ''}\``)
        .join('\n')
    }`
  })
};

