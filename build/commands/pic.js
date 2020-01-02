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
const util_1 = require("../util");
const Constants_1 = require("../Constants");
exports.picCommand = {
    name: 'pic',
    aliases: ['floof'],
    execute: () => __awaiter(void 0, void 0, void 0, function* () {
        return ({
            title: util_1.randomInArray(Object.values(Constants_1.Emojis)),
            image: { url: util_1.randomInArray(Constants_1.CatPics) }
        });
    })
};
