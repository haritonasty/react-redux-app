import  v4  from 'uuid';

export const addTodoList = ( title , todos) => {
	return {
	type: 'ADD_TODOLIST',
	id: v4(),
	title,
	todos,
	};
};

export const updateTodoList = ( id, title , todos) => {
	return {
	type: 'UPDATE_TODOLIST',
	id,
	title,
	todos,
	};
};

export const addTodoTask = (id = v4(), completed = false, text = '') => {
	return {
		type: 'ADD_TODOTASK',
		id,
		completed,
		text,
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

