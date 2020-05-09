"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
class AbstractTodoStateChanger {
    constructor(newState) {
        this.newState = newState;
    }
    changeState(todo) {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    }
}
exports.AbstractTodoStateChanger = AbstractTodoStateChanger;
class CompleteTodoStateChanger extends AbstractTodoStateChanger {
    constructor() {
        super(enums_1.TodoState.Complete);
    }
    canChangeState(todo) {
        return !!todo && [enums_1.TodoState.Active, enums_1.TodoState.Deleted].includes(todo.state);
    }
}
