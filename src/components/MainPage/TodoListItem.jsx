import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';
import { history } from 'react-router-dom';

const TodoListItem = ({title, todos, id, history}) => (
	<li>
		<span>{title}</span>
		<button type="button" onClick={() => {history.push(`/${id}/create`)}}>  Edit </button>
		<TodoList todos={todos}/>
	</li>

);

TodoListItem.propTypes = {
	title: PropTypes.string.isRequired,
};

export default TodoListItem;