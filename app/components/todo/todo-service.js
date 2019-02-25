import Todo from "../../models/todo.js";


// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/steven/todos/',
	timeout: 4000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	get Todos() {
		return _state.todos
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		todoApi.get()
			.then(res => {
				let data = res.data.data.map(t => new Todo(t))
				_setState('todos', data)
			})
			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				this.getTodos()
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(_id) {
		let todo = _state.todos.find(todo => todo._id == _id)
		todo.completed = !todo.completed
		todoApi.put(_id, todo)
			.then(res => {
				this.getTodos()
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(err => _setState('error', err.response.data))
	}

	removeTodo(id) {
		todoApi.delete(id)
			.then(res => {
				this.getTodos()
			})
		// This one is on you to write.... 
		// The http method is delete at the todoId
	}

	countTodos() {
		let todos = _state.todos
		return todos.length
	}
}
