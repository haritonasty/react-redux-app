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

export const updateTodoListCompleted = ( idList, id) => {
	return {
		type: 'UPDATE_TODOLIST_COMPLETED',
		idList,
		id,
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

export const updateTodoTaskText = (id, text) => {
	return {
		type: 'UPDATE_TODOTASK_TEXT',
		id,
		text,
	};
};

export const updateTodoTaskCompleted = (id, completed) => {
	return {
		type: 'UPDATE_TODOTASK_COMPLETED',
		id,
		completed
	};
};

export const deleteTodos = () => {
	return {
		type: 'DELETE_TODOS',
	};
};

export const deleteTodoTask = (id) => {
	return {
		type: 'DELETE_TODOTASK',
		id,
	};
};

