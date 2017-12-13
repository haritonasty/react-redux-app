import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import { updateTodoListCompleted } from '../../actions';
import { connect } from 'react-redux';

const TodoList = ({ todos, idList, dispatch }) => (
	<ul>
		{todos.map(todo =>
			<Todo
				key={todo.id}
				{...todo}
				// onClick={(id,completed) => dispatch(updateTodoListCompleted(idList, id, completed ))}
				idList
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