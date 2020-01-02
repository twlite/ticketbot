import { Command } from './Command';
import { randomInArray } from '../util';
import { CatPics, Emojis } from '../Constants';

export const picCommand: Command = {
  name: 'pic',
  aliases: ['floof'],
  execute: async () => ({
    title: randomInArray(Object.values(Emojis)),
    image: { url: randomInArray(CatPics) }
  })
};
