import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';


const TodoLists = ({ todolists, history, dispatch }) => {
	return (

			<ul>
				{todolists.map(todolist =>
					<TodoListItem
						history={history}
						key={todolist.id}
						{...todolist}
						dispatch={dispatch}
					/>
				)}
			</ul>
	);
};

TodoLists.propTypes = {
	todolists: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired).isRequired,
};

export default TodoLists;