import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateTodoListCompleted } from '../../actions';


const Todo = ({ text, completed, id, onClick, idList, dispatch }) => (
	<li>
		<div className="md-checkbox">
			<input
				onChange={e=>{
					dispatch(updateTodoListCompleted(idList, id, e.target.checked ))
				}}
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

export default connect()(Todo);