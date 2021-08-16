console.log('Test started');
import {UsedCar} from "./usedCar";



// static state and functions live with classes only and receivable from classes
const msg = UsedCar.text;
console.log('Got from state: ', msg);

const msg_2 = UsedCar.getText();
console.log('Got from method: ', msg_2);



// non static state and functions are receivable only though class instances
let obj = new UsedCar(5);
let str = obj.getDetails();
console.log('This is the method: ', str);
