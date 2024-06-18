
class TodoView {
  constructor() {
    this.app = document.getElementById("app");
    this.form = document.getElementById("todo-form");
    this.input = document.getElementById("new-todo");
    this.todoList = document.getElementById("todo-list");
  }

  get _todoText() {
    return this.input.value;
  }

  _resetInput() {
    this.input.value = "";
  }

  createTodoElement(todo) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.dataset.id = todo.id;

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.task;

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);

    if (todo.completed) {
      li.classList.add("completed");
    }

    return li;
  }

  displayTodos(todos) {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    todos.forEach((todo) => {
      const todoElement = this.createTodoElement(todo);
      this.todoList.appendChild(todoElement);
    });
  }

  bindAddTodo(handler) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (this._todoText) {
        handler(this._todoText);
        this._resetInput();
      }
    });
  }

  bindDeleteTodo(handler) {
    this.todoList.addEventListener("click", (event) => {
      if (event.target.className === "delete-btn") {
        const id = event.target.parentElement.dataset.id;
        handler(id);
      }
    });
  }

  bindToggleTodoCompletion(handler) {
    this.todoList.addEventListener("click", (event) => {
      if (event.target.className === "todo-text") {
        const id = event.target.parentElement.dataset.id;
        handler(id);
      }
    });
  }

  bindEditTodo(handler) {
    this.todoList.addEventListener("click", (event) => {
      if (event.target.className === "edit-btn") {
        const id = event.target.parentElement.dataset.id;
        const newTask = prompt(
          "Edit task:",
          event.target.previousSibling.textContent
        );
        if (newTask) {
          handler(id, newTask);
        }
      }
    });
  }
}
