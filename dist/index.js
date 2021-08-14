"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = require("./car");
let myCar = new car_1.Car(1989, 'tayota', 'carolla', 250);
// console.log('THIS IS TEST OF BRAND: ', myCar);
console.log('THIS IS THE BRAND: ', myCar.getBrandModel());
