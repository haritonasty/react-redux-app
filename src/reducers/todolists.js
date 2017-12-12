const todolist = (state, action) => {
	switch (action.type) {
		case 'ADD_TODOLIST':
			let notEmptyTodos = action.todos.filter( el => el.text !== "");
			return {
				id: action.id,
				title: action.title,
				todos: notEmptyTodos,
			};
		default:
			return state;
	}
};

const todolists = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODOLIST':
			return [
				...state,
				todolist(undefined, action),
			];

		case 'UPDATE_TODOLIST':
			let notEmptyTodos = action.todos.filter( el => el.text !== "");
			let newtodolist = state.find((elem) => elem.id === action.id);
			newtodolist.title = action.title;
			newtodolist.todos = notEmptyTodos;
			return [...state];
		default:
			return state;
	}
};

export default todolists;