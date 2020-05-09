import { Todo } from './interfaces';
import { TodoState } from './enums';

class TodoService {
  static lastId: number = 0;

  constructor(private todos: Todo[]) {
  }

  add(todo: Todo) {
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

const svc = new TodoService([]);
console.log(svc);
const todoElement = {
  name: 'Kurt',
  state: TodoState.New,
};
svc.add(todoElement);
