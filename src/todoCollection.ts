import {TodoItem} from "./todoItem";

export class TodoCollection {
    private nextId: number = 1;
    private itemMap = new Map<number, TodoItem>();

    public constructor(public userName: string, public todoItems: TodoItem[] = []) {
        todoItems.forEach(item => this.itemMap.set(item.id, item));
    }

    public addTodo(task: string): number {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));
        return this.nextId;
    }

    public getTodoById(id: number): TodoItem {
        return this.itemMap.get(id);
    }

    public markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    }

    public getTodoItems(includeComplete: boolean): TodoItem[] {
        return [...this.itemMap.values()].filter(item => includeComplete || !item.complete);
    }

    public removeComplete(): void {
        this.itemMap.forEach(item => {
            if(item.complete === true) {
                this.itemMap.delete(item.id);
            }
        })
    }

}