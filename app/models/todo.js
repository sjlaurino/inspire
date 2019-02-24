export default class Todo {
  constructor(data) {
    this.completed = data.completed
    this.description = data.description
    this._id = data._id
    this.user = data.user
  }

  grabTemplate() {
    if (this.completed == true) {
      return `
      <li id="todo-line"><del>${this.description}</del></li> <i onclick="app.controllers.todoController.removeTodo('${this._id}')" class="far fa-trash-alt" id="todo-line"></i>
    `
    } else {
      return `
      <li id="todo-line">${this.description}</li> <i onclick="app.controllers.todoController.removeTodo('${this._id}')" class="far fa-trash-alt"></i> <div class="form-check">
       <input onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')" class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."><p id="todo-line" class="ml-1 check-if">check if completed</p>
</div>
      `
    }
  }
}