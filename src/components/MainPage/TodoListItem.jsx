import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';
import { history } from 'react-router-dom';

const TodoListItem = ({title, todos, id, history, dispatch}) => (
	<li>
		<span>{title}</span>
		<button type="button" onClick={() => {history.push(`/${id}/edit`)}}>  Edit </button>
		<TodoList todos={todos} idList={id} dispatch={dispatch}/>
	</li>

);

TodoListItem.propTypes = {
	title: PropTypes.string.isRequired,
};

export default TodoListItem;