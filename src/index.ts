import {TodoItem} from "./todoItem";
import {TodoCollection} from "./todoCollection";

let todoList = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect tickets"),
    new TodoItem(4, "Call to Jack"),
];

let collection = new TodoCollection('Martin', todoList);

console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId = collection.addTodo('Play basketball');
let todoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));
console.log("\n here is the full list: ");
console.log(JSON.stringify(todoList));