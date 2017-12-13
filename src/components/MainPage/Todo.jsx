import React from 'react';
import PropTypes from 'prop-types';


const Todo = ({ text, completed, id, idList,  onClick }) => (
	<li>
		<div className="md-checkbox">
			<input
				onChange={e=>{onClick(id);}}
				defaultChecked={completed}
				id="todo"
				type="checkbox"
				className="tasks__item__checkbox"/>
			<label  htmlFor="todo" className="tasks__item__text">{text}</label>
		</div>
	</li>
);

Todo.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Todo;