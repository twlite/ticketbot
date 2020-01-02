import { Command } from './Command';

export const pingCommand: Command = {
  name: 'ping',
  execute: async ({ client }) =>
    `ponge ${client.shards.get(0).latency}ms`
};
