var DataAccess;
(function (DataAccess) {
    let lastId = 0;
    function generateTodoId() {
        return lastId += 1;
    }
    class TodoService {
        constructor(todos) {
            this.todos = todos;
        }
        get nextId() {
            return lastId += 1;
        }
        add(todo) {
            todo.id = this.nextId;
            this.todos.push(todo);
            return todo;
        }
        getAll() {
            return this.todos;
        }
    }
})(DataAccess || (DataAccess = {}));
