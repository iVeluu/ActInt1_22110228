
class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(task) {
    const todo = {
      id: Date.now().toString(),
      task: task,
      completed: false,
    };
    this.todos.push(todo);
    return todo;
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleTodoCompletion(id) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  editTodoTask(id, newTask) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.task = newTask;
    }
  }

  getTodos() {
    return this.todos;
  }
}
