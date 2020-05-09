"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
class SmartTodo {
    constructor(name) {
        this._state = enums_1.TodoState.New;
        this.name = name;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        if (state === enums_1.TodoState.Complete) {
            const canBeCompleted = [enums_1.TodoState.Active, enums_1.TodoState.Deleted].includes(this.state);
            if (!canBeCompleted) {
                throw new Error('Todo must be Active or Deleted in order to be marked as Completed');
            }
        }
        this._state = state;
    }
}
const todo = new SmartTodo('Pick up laundry');
//console.log(todo);
//console.log(`State ${todo.state}`);
//todo.state = TodoState.Complete;
//console.log(todo);
//console.log(`State ${todo.state}`);
class TodoStateChanger {
    constructor(newState) {
        this.newState = newState;
    }
    canChangeState(todo) {
        return !!todo;
    }
    changeState(todo) {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    }
}
exports.TodoStateChanger = TodoStateChanger;
