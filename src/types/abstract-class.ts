import { Todo } from './interfaces';
import { TodoState } from './enums';

export abstract class AbstractTodoStateChanger {
  constructor(private newState: TodoState) {}

  abstract canChangeState(todo: Todo): boolean;

  changeState(todo: Todo): Todo {
    if (this.canChangeState(todo)) {
      todo.state = this.newState;
    }

    return todo;
  }
}

class CompleteTodoStateChanger extends AbstractTodoStateChanger {
  constructor() {
    super(TodoState.Complete);
  }

  canChangeState(todo: Todo): boolean {
    return !!todo && [TodoState.Active, TodoState.Deleted].includes(todo.state);
  }
}
