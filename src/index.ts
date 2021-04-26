import {TodoItem} from "./todoItem";
import {TodoCollection} from "./todoCollection";
import * as inquirer from "inquirer";

let todoList: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect tickets"),
    new TodoItem(4, "Call to Jack", true),
];

let collection: TodoCollection = new TodoCollection('Martin', todoList);
collection.addTodo('Play basketball');

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List: `);
    let itemCountInfo = collection.getItemCounts();
    console.log(`The total tasks: ${itemCountInfo.total} and incomplete tasks: ${itemCountInfo.incomplete}`);
    collection.getTodoItems(true).forEach(function (item) {
        item.printDetails();
    });
}

enum Commands {
    Wait = "Wait",
    Goon = "Goon",
    Quit = "Quit",
    Other = "Other"
}

function promptUser(): void {
    console.clear();
    displayTodoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose options",
        choices: Object.values(Commands),
    }).then(answers => {
        if (answers['command'] !== Commands.Quit) {
            promptUser();
        }
    });
}

promptUser();


