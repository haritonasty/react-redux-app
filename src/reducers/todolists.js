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
		default:
			return state;
	}
};

export default todolists;