const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODOTASK':
			return {
				id: action.id,
				text: action.text,
				completed: action.completed,
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

		case 'UPDATE_TODOTASK_TEXT':
			let newtodotext = state.find((elem) => elem.id === action.id);
			newtodotext.text = action.text;
			return [...state];

		case 'UPDATE_TODOTASK_COMPLETED':
			let newtodocompleted = state.find((elem) => elem.id === action.id);
			newtodocompleted.completed = action.completed;
			return [...state];

		case 'DELETE_TODOS':
			return [];

		default:
			return state;
	}
};

export default todos;