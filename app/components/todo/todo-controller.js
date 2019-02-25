import TodoService from "./todo-service.js";
import Todo from "../../models/todo.js";

const _todoService = new TodoService()

function _drawTodos() {
	let template = ''
	_todoService.Todos.forEach(t => {
		template += t.grabTemplate()
	})
	document.querySelector('#todos').innerHTML = template
	let count = _todoService.countTodos()
	document.querySelector('#todo-count').innerHTML = ' ' + count.toString()
}


function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()

	}

	addTodo(event) {
		event.preventDefault()
		var form = event.target
		var todo = {
			description: form.description.value,
		}

		_todoService.addTodo(todo)
		form.reset()
	}

	toggleTodoStatus(_id) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(_id)
	}

	removeTodo(id) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(id)
	}
}
