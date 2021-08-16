"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsedCar = void 0;
class UsedCar {
    constructor(id) {
        this.id = id;
    }
    getDetails() {
        return this.id;
    }
    static getText() {
        return this.text;
    }
}
exports.UsedCar = UsedCar;
UsedCar.text = 'this is text';
