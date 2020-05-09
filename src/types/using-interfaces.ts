import { Todo, ITodoService } from './interfaces';
import { TodoState } from './enums';

interface TodoElement extends Todo, ITodoService {
  label: string;
};

const entry: TodoElement = {
  name: 'Johnny',
  state: TodoState.New,
  label: 'urgent',
  add: (el: Todo) => { return el; },
  delete: () => {
    // TODO XD
  }
};

console.log(entry);
