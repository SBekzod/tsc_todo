"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(production, brand, model, speed, isNew = true) {
        this.production = production;
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
    getBrandModel() {
        console.log(this.getModel());
        return this.brand;
    }
    getModel() {
        return this.model;
    }
}
exports.Car = Car;
