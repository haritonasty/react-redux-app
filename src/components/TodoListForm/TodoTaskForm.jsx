import React from 'react';
import { connect } from 'react-redux';
import { updateTodoTaskText, updateTodoTaskCompleted } from '../../actions';

const TodoTaskForm = ({text, id, dispatch, completed}) => {
	let input;
	// function handleChange(e) {
	// 	onClick(e.target.value);
	// }
	return (
	<li>
		<input
			 onChange={e=>{
				 dispatch(updateTodoTaskCompleted(id, e.target.checked));
			 }}
			checked={completed}
			type="checkbox"
			className="tasks__item__checkbox"/>
		<input autoFocus type="text"  className="create-todo__text"  name="todo"
		       defaultValue={text}
			// value={value}
			   onChange={e => {
				   dispatch(updateTodoTaskText(id, e.target.value));
			   }}

		/>
		<img className="tasks__item__img-delete" src="../deleteTask.svg" alt="remove task"/>
	</li>
)};


export default connect()(TodoTaskForm);