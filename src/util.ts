import { readFileSync } from 'fs';
import { resolve } from 'path';
import { TicketBotOptions } from './Client';
import { DatabaseConfig } from './Database';

export const dateToString = (time: Date): String =>
  new Date(time)
    .toString()
    .split(' ')
    .slice(1, 5)
    .join(' ');

export const randomInArray = (arr: any[]) =>
  arr[Math.floor(Math.random() * arr.length)];

export const loadConfig = () =>
  JSON.parse(readFileSync(resolve(__dirname, '..', 'config.json'), 'utf8')) as {
    clientConfig: TicketBotOptions,
    dbConfig: DatabaseConfig
  };
