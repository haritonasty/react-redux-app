import React from 'react';
import deleteTask from '../../img/deleteTask.png';

const TodoTaskForm = ({text, completed, onClickText, onClickCheckbox, onClickDelete, onCtrlEnter}) => {
	return (
		<li className="tasks-form__item">
			<input type="checkbox" className="tasks-form__item__checkbox"
			       onChange={e => {
				       onClickCheckbox(e.target.checked);
			       }}
			       checked={completed}
			/>
			<input autoFocus type="text" className="tasks-form__text" name="todo" maxlength="22"
			       value={text}
			       onChange={e => {
				       onClickText(e.target.value);
			       }}
			       onKeyDown={e => {
				       if (e.ctrlKey && e.keyCode == 13) {
					       onCtrlEnter();
				       }
			       }}
			/>
			<img className="tasks-form__item__img-delete" src={deleteTask} alt="del"
			     onClick={() => {
				     onClickDelete();
			     }}
			/>
		</li>
	)
};


export default TodoTaskForm;