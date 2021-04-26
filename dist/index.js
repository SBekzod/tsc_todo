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
collection.addTodo('Play basketball');
console.clear();
console.log(`${collection.userName}'s Todo List: `);
let itemCountInfo = collection.getItemCounts();
console.log(`The total tasks: ${itemCountInfo.total} and incomplete tasks: ${itemCountInfo.incomplete}`);
collection.getTodoItems(true).forEach(function (item) {
    item.printDetails();
});
