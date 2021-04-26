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
// defining the state of showing the completed tasks
let showComplete: boolean = true;

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List: `);
    let itemCountInfo = collection.getItemCounts();
    console.log(`The total tasks: ${itemCountInfo.total} and incomplete tasks: ${itemCountInfo.incomplete}`);
    collection.getTodoItems(showComplete).forEach(function (item) {
        item.printDetails();
    });
}

enum Commands {
    Toggle = "Show/Hide Complete",
    Add = "Add New Task",
    Quit = "Quit",
}

function promptAdd(): void {
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

function promptUser(): void {
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
            case  Commands.Add:
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


