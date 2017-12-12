import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';

const TodoListItem = ({title, todos}) => (
	<li>
		{title}
		<TodoList todos={todos}/>
	</li>

);

TodoListItem.propTypes = {
	title: PropTypes.string.isRequired,
};

export default TodoListItem;