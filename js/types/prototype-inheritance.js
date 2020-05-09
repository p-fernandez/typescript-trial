"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const classes_accessors_1 = require("./classes-accessors");
class CompleteTodoStateChanger extends classes_accessors_1.TodoStateChanger {
    constructor() {
        super(enums_1.TodoState.Complete);
    }
    canChangeState(todo) {
        return super.canChangeState(todo)
            && [enums_1.TodoState.Active, enums_1.TodoState.Deleted].includes(todo.state);
    }
}
