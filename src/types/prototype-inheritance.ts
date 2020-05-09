import { Todo } from './interfaces';
import { TodoState } from './enums';
import { TodoStateChanger } from './classes-accessors';

class CompleteTodoStateChanger extends TodoStateChanger {
  constructor() {
    super(TodoState.Complete);
  }

  canChangeState(todo: Todo): boolean {
    return super.canChangeState(todo)
      && [TodoState.Active, TodoState.Deleted].includes(todo.state);
  }
}
