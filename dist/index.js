"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todoList = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect tickets"),
    new todoItem_1.TodoItem(4, "Call to Jack"),
];
let collection = new todoCollection_1.TodoCollection('Martin', todoList);
console.clear();
console.log(`${collection.userName}'s Todo List`);
let newId = collection.addTodo('Go to run');
let todoItem = collection.getTodoById(newId);
console.log(JSON.stringify(todoItem));
console.log("\n here is the full list: ");
console.log(JSON.stringify(todoList));
