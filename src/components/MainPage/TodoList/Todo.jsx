import React from 'react';
import PropTypes from 'prop-types';


const Todo = ({ text, completed, id, onClick }) => (

	<li className="tasks__item">
		<div className="md-checkbox">
			<input id={id} type="checkbox" className="tasks__item__checkbox"
				onChange={()=>{
					onClick();
					}}
				checked={completed}
			/>
			<label  htmlFor={id}
			        className={completed ? 'tasks__item__text tasks__item__text_done' : 'tasks__item__text'}
			>{text}
			</label>
		</div>
	</li>
);




Todo.propTypes = {
	id: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};



export default Todo;