"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todoList = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect tickets"),
    new todoItem_1.TodoItem(4, "Call to Jack", true),
];
let collection = new todoCollection_1.TodoCollection('Martin', todoList);
console.clear();
console.log(`${collection.userName}'s Todo List: `);
let newId = collection.addTodo('Play basketball');
let todoItem = collection.getTodoById(newId);
collection.getTodoItems(false).forEach(function (item) {
    item.printDetails();
});
