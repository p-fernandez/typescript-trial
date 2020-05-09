import { TodoState } from './enums';

export interface Todo {
  name: string;
  surname?: string;
  state: TodoState;
};

export interface ITodoService {
  add(todo: Todo): Todo;
  delete(todoId: number): void;
};

const todoWithOptionals: Todo = {
  name: 'Johnny',
  surname: 'Mnemonic',
  state: TodoState.New,
};

const todoWithoutOptionals: Todo = {
  name: 'Johnny',
  state: TodoState.New,
};

console.log(todoWithOptionals);
console.log(todoWithoutOptionals);
