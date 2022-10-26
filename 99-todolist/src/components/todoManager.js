class TodoManager {
  constructor() {
    this.todoList = [];
  }

  addItem(item, finished = false) {
    const todo = new Todo(item, finished);
    this.todoList.push(todo);
    return this.todoList;
  }

  getItems() {
    return this.todoList;
  }

  getLeftTodoCount() {
    // return this.todoList.filter((todo) => !todo.finished).length;
    return this.todoList.reduce((total, current) => {
      if (current.finished === false) {
        return ++total;
      } else {
        return total;
      }
    }, 0);
  }
}