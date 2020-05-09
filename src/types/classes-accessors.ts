import { Todo } from './interfaces';
import { TodoState } from './enums';

class SmartTodo {
  name: string;
  _state: TodoState = TodoState.New;

  constructor(name: string) {
    this.name = name;
  }

  get state() {
    return this._state;
  }

  set state(state) {
    if (state === TodoState.Complete) {
      const canBeCompleted = [TodoState.Active, TodoState.Deleted].includes(this.state);

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


export class TodoStateChanger {
  constructor(private newState: TodoState) {}

  canChangeState(todo: Todo): boolean {
    return !!todo;
  }

  changeState(todo: Todo): Todo {
    if (this.canChangeState(todo)) {
      todo.state = this.newState;
    }

    return todo;
  }
}
