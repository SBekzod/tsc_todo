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
// defining the state of showing the completed tasks
let showComplete = true;
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List: `);
    let itemCountInfo = collection.getItemCounts();
    console.log(`The total tasks: ${itemCountInfo.total} and incomplete tasks: ${itemCountInfo.incomplete}`);
    collection.getTodoItems(showComplete).forEach(function (item) {
        item.printDetails();
    });
}
var Commands;
(function (Commands) {
    Commands["Toggle"] = "Show/Hide Complete";
    Commands["Add"] = "Add New Task";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
function promptAdd() {
    console.clear();
    inquirer.prompt({
        type: "input",
        name: "add",
        message: "Enter new task:"
    }).then(answers => {
        if (answers['add'] !== "") {
            collection.addTodo(answers['add']);
        }
        promptUser();
    });
}
function promptUser() {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose options",
        choices: Object.values(Commands),
    }).then(answers => {
        switch (answers["command"]) {
            case Commands.Toggle:
                showComplete = !showComplete;
                promptUser();
                break;
            case Commands.Add:
                promptAdd();
                break;
            default:
                if (answers['command'] !== Commands.Quit) {
                    promptUser();
                }
                break;
        }
    });
}
// main computing of the index.ts
promptUser();
