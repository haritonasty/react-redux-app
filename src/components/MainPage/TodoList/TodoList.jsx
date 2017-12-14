import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { connect } from 'react-redux';

const TodoList = ({ todos, dispatch, onClickTodo }) => (
	<ul className="tasks scrollable" >
		{todos.map(todo =>
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => onClickTodo(todo.id)}
			/>
		)}
	</ul>
);

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired,
	}).isRequired).isRequired,
};

export default connect()(TodoList);