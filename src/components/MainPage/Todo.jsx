import React from 'react';
import PropTypes from 'prop-types';


const Todo = ({ text, completed, onClick }) => (
	<li>
		<div className="md-checkbox">
			<input
				onChange={()=>{onClick()}}
				checked={completed}
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