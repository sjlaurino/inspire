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
      <li onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')" id="todo-line"><del class="todo-line">${this.description}</del> <i onclick="app.controllers.todoController.removeTodo('${this._id}')" class="far fa-trash-alt" id="todo-line"></i></li>
    `
    } else {
      return `
      <li id="todo-line">${this.description} <i onclick="app.controllers.todoController.removeTodo('${this._id}')" class="far fa-trash-alt"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
       <input onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')" class="form-check-input position-static" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."><span id="todo-line" class="ml-1 check-if">check if completed</span>
      `
    }
  }
}