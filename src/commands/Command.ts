import { Message, EmbedOptions } from 'eris';
import TicketBot from '../Client';
import Database from '../Database';

export interface Command {
  name: string;
  aliases?: string[];
  help?: string;
  execute(params: {
    msg: Message,
    client: TicketBot,
    args: string[],
    commands: Map<string, Command>,
    db: Database
  }): Promise<EmbedOptions | string>;
};
