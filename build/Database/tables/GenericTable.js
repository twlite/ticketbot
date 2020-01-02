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
class GenericTable {
    constructor(collection) {
        this.collection = collection;
    }
    getIncrementingID() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.currentID) {
                const currentIDResult = yield this.collection.findOne({ currentID: { $exists: true } });
                if (currentIDResult) {
                    this.currentID = currentIDResult.currentID;
                }
                else {
                    this.collection.insertOne({ currentID: 0 });
                    this.currentID = 0;
                }
            }
            this.collection.updateOne({ currentID: { $exists: true } }, { $inc: { currentID: 1 } });
            return ++this.currentID;
        });
    }
}
exports.default = GenericTable;
;
