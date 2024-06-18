
document.addEventListener("DOMContentLoaded", function () {
  const todoList = new TodoList();
  const todoView = new TodoView();

  const todoController = {
    addTodo: (task) => {
      const todo = todoList.addTodo(task);
      todoView.displayTodos(todoList.getTodos());
    },
    deleteTodo: (id) => {
      todoList.removeTodo(id);
      todoView.displayTodos(todoList.getTodos());
    },
    toggleTodoCompletion: (id) => {
      todoList.toggleTodoCompletion(id);
      todoView.displayTodos(todoList.getTodos());
    },
    editTodo: (id, newTask) => {
      todoList.editTodoTask(id, newTask);
      todoView.displayTodos(todoList.getTodos());
    },
  };

  todoView.bindAddTodo(todoController.addTodo);
  todoView.bindDeleteTodo(todoController.deleteTodo);
  todoView.bindToggleTodoCompletion(todoController.toggleTodoCompletion);
  todoView.bindEditTodo(todoController.editTodo);

  todoView.displayTodos(todoList.getTodos());
});
