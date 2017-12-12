const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODOTASK':
			return {
				id: action.id,
				text: 'Hello',
				completed: false,
			};
		default:
			return state;
	}
};

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODOTASK':
			return [
				...state,
				todo(undefined, action),
			];
		default:
			return state;
	}
};

export default todos;