"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
;
const entry = {
    name: 'Johnny',
    state: enums_1.TodoState.New,
    label: 'urgent',
    add: (el) => { return el; },
    delete: () => {
        // TODO XD
    }
};
console.log(entry);
