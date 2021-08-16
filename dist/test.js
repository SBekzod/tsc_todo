"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Test started');
const usedCar_1 = require("./usedCar");
const msg = usedCar_1.UsedCar.text;
console.log('Got from state: ', msg);
const msg_2 = usedCar_1.UsedCar.getText();
console.log('Got from method: ', msg_2);
// other functions are receivable only after getting instance
let obj = new usedCar_1.UsedCar(5);
let str = obj.getDetails();
console.log('This is the method: ', str);
