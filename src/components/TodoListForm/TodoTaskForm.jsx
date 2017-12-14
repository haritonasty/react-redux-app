import React from 'react';
import deleteTask from '../../img/deleteTask.png';

const TodoTaskForm = ({text, completed, onClickText, onClickCheckbox, onClickDelete}) => {
	return (
		<li className="tasks-form__item">
			<input type="checkbox" className="tasks-form__item__checkbox"
			       onChange={e=>{
				       onClickCheckbox(e.target.checked);
			       }}
			       checked={completed}
				/>
			<input autoFocus type="text"  className="tasks-form__text"  name="todo"
			       value={text}
				   onChange={e => {
					   onClickText(e.target.value);
				   }}
			/>
			<img className="tasks-form__item__img-delete" src={deleteTask} alt="del"
			     onClick={()=>{
				     onClickDelete();
			     }}
			/>
		</li>
	)};


export default TodoTaskForm;