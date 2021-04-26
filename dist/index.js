"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
const inquirer = require("inquirer");
let todoList = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect tickets"),
    new todoItem_1.TodoItem(4, "Call to Jack", true),
];
let collection = new todoCollection_1.TodoCollection('Martin', todoList);
collection.addTodo('Play basketball');
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List: `);
    let itemCountInfo = collection.getItemCounts();
    console.log(`The total tasks: ${itemCountInfo.total} and incomplete tasks: ${itemCountInfo.incomplete}`);
    collection.getTodoItems(true).forEach(function (item) {
        item.printDetails();
    });
}
var Commands;
(function (Commands) {
    Commands["Wait"] = "Wait";
    Commands["Goon"] = "Goon";
    Commands["Quit"] = "Quit";
    Commands["Other"] = "Other";
})(Commands || (Commands = {}));
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose options",
        choices: Object.values(Commands)
    }).then(answers => {
        if (answers['command'] !== Commands.Quit) {
            promptUser();
        }
    });
}
promptUser();
console.log('Type:', typeof (Object.values(Commands)));
console.log('Value:', Object.values(Commands));
