// CommonJS approach
import Model = require('./model');
import Todo = Model.Todo;

let lastId: number = 0;

function generateTodoId() {
  return lastId +=1;
}

export interface ITodoService {
  add(todo: Todo): Todo;
  getAll(): Todo[];
}

export class TodoService implements ITodoService {
  get nextId() {
    return lastId += 1;
  }

  constructor(private todos: Todo[]) {}

  add(todo: Todo): Todo {
    todo.id = this.nextId;
    this.todos.push(todo);
    return todo;
  }

  getAll() {
    return this.todos;
  }
}
