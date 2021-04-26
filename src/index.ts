import {TodoItem} from "./todoItem";
import {TodoCollection} from "./todoCollection";

let todoList = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect tickets"),
    new TodoItem(4, "Call to Jack", true),
];

let collection = new TodoCollection('Martin', todoList);
collection.addTodo('Play basketball');

console.clear();
console.log(`${collection.userName}'s Todo List: `);

let itemCountInfo = collection.getItemCounts();
console.log(`The total tasks: ${itemCountInfo.total} and incomplete tasks: ${itemCountInfo.incomplete}`);

collection.getTodoItems(true).forEach(function (item) {
    item.printDetails();
});

