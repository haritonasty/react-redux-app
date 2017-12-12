import  v4  from 'uuid';

export const addTodoList = (title , todos) => {
	return {
	type: 'ADD_TODOLIST',
	id: v4(),
	title,
	todos,
	};
};

export const addTodoTask = () => {
	return {
		type: 'ADD_TODOTASK',
		id: v4(),
	};
};

export const updateTodoTask = (id, text) => {
	return {
		type: 'UPDATE_TODOTASK',
		id,
		text,
	};
};

export const deleteTodos = () => {
	return {
		type: 'DELETE_TODOS',
	};
};

