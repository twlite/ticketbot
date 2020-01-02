"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
exports.dateToString = (time) => new Date(time)
    .toString()
    .split(' ')
    .slice(1, 5)
    .join(' ');
exports.randomInArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
exports.loadConfig = () => JSON.parse(fs_1.readFileSync(path_1.resolve(__dirname, '..', 'config.json'), 'utf8'));
