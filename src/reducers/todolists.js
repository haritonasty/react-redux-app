const todolist = (state, action) => {
	switch (action.type) {
		case 'ADD_TODOLIST':
			return {
				id: action.id,
				title: action.title,
				todos:[{
					id: '0',
					text: 'Welcome back!',
					completed: false,
				}],
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