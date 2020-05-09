"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
class TodoService {
    constructor(todos) {
        this.todos = todos;
    }
    add(todo) {
        const newId = TodoService.getNextId();
        console.log(`The new Id is: ${newId}`);
    }
    getAll() {
        return this.todos;
    }
    static getNextId() {
        return TodoService.lastId += 1;
    }
}
TodoService.lastId = 0;
const svc = new TodoService([]);
console.log(svc);
const todoElement = {
    name: 'Kurt',
    state: enums_1.TodoState.New,
};
svc.add(todoElement);
