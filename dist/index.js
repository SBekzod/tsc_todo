"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const inquirer = require("inquirer");
const jsonTodoCollection_1 = require("./jsonTodoCollection");
let todoList = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect tickets"),
    new todoItem_1.TodoItem(4, "Call to Jack", true),
    new todoItem_1.TodoItem(5, "Play basketball"),
];
let collection = new jsonTodoCollection_1.JsonTodoCollection('Martin', todoList);
// defining the state of showing the completed tasks
let showComplete = true;
var Commands;
(function (Commands) {
    Commands["Toggle"] = "Show/Hide Complete";
    Commands["Add"] = "Add New Task";
    Commands["Complete"] = "Complete Task";
    Commands["Purge"] = "Remove Completed Tasks";
    Commands["Quit"] = "Quit";
})(Commands || (Commands = {}));
// MAIN COMPUTING: index.ts
promptUser();
function displayTodoList() {
    console.log(`${collection.userName}'s Todo List: `);
    let itemCountInfo = collection.getItemCounts();
    console.log(`The total tasks: ${itemCountInfo.total} and incomplete tasks: ${itemCountInfo.incomplete}`);
    collection.getTodoItems(showComplete).forEach(function (item) {
        item.printDetails();
    });
}
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
function completeTask() {
    console.clear();
    inquirer.prompt({
        type: "list",
        name: "task",
        message: "Choose the task to complete:",
        choices: collection.getTodoItems(false).length > 0 ? collection.getTodoItems(false).map(ele => {
            return `${ele.id} ${ele.task}`;
        }) : ["ALL TASKS FULFILLED"],
    }).then(answers => {
        if (answers['task'] !== "") {
            let chosen_id = answers['task'].split(" ")[0];
            collection.markComplete(parseInt(chosen_id), true);
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
            case Commands.Complete:
                completeTask();
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
            default:
                if (answers['command'] !== Commands.Quit) {
                    promptUser();
                }
                break;
        }
    });
}
