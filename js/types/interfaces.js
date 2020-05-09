"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
;
;
const todoWithOptionals = {
    name: 'Johnny',
    surname: 'Mnemonic',
    state: enums_1.TodoState.New,
};
const todoWithoutOptionals = {
    name: 'Johnny',
    state: enums_1.TodoState.New,
};
console.log(todoWithOptionals);
console.log(todoWithoutOptionals);
