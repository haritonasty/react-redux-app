import  v4  from 'uuid';

export const addTodoList = (title) => {
	return {
	type: 'ADD_TODOLIST',
	id: v4(),
	title,
	};
};

export const addTodoTask = () => {
	return {
		type: 'ADD_TODOTASK',
		id: v4(),
	};
};