import {TodoItem} from "./todoItem";
import {TodoCollection} from "./todoCollection";
import * as inquirer from "inquirer";
import {JsonTodoCollection} from "./jsonTodoCollection";

let todoList: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect tickets"),
    new TodoItem(4, "Call to Jack", true),
    new TodoItem(5, "Play basketball" ),
];

let collection: TodoCollection = new JsonTodoCollection('Martin', todoList);
// defining the state of showing the completed tasks
let showComplete: boolean = true;
enum Commands {
    Toggle = "Show/Hide Complete",
    Add = "Add New Task",
    Complete = "Complete Task",
    Purge = "Remove Completed Tasks",
    Quit = "Quit",
}
// MAIN COMPUTING: index.ts
promptUser();

function displayTodoList(): void {
    console.log(`${collection.userName}'s Todo List: `);
    let itemCountInfo = collection.getItemCounts();
    console.log(`The total tasks: ${itemCountInfo.total} and incomplete tasks: ${itemCountInfo.incomplete}`);
    collection.getTodoItems(showComplete).forEach(function (item) {
        item.printDetails();
    });
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

function completeTask(): void {
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


