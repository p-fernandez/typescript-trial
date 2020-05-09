"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoState;
(function (TodoState) {
    TodoState[TodoState["New"] = 1] = "New";
    TodoState[TodoState["Active"] = 2] = "Active";
    TodoState[TodoState["Complete"] = 3] = "Complete";
    TodoState[TodoState["Deleted"] = 4] = "Deleted";
})(TodoState = exports.TodoState || (exports.TodoState = {}));
;
//console.log(TodoState);
//console.log(TodoState.New);
const index = TodoState.Complete;
//console.log(TodoState[index]);
