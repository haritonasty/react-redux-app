import React from 'react';

const TodoTaskForm = ({text, completed, onClickText, onClickCheckbox, onClickDelete}) => {
	return (
		<li>
			<input type="checkbox" className="tasks__item__checkbox"
			       onChange={e=>{
				       onClickCheckbox(e.target.checked);
			       }}
			       checked={completed}
				/>
			<input autoFocus type="text"  className="create-todo__text"  name="todo"
			       value={text}
				   onChange={e => {
					   onClickText(e.target.value);
				   }}
			/>
			{/*<img className="tasks__item__img-delete" src="img/deleteTask.svg" alt="remove task"/>*/}
			<span onClick={()=>{
				onClickDelete();

			}}> delete </span>
		</li>
	)};


export default TodoTaskForm;