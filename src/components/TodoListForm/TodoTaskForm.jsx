import React from 'react';
import PropTypes from 'prop-types';
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
			<input autoFocus type="text" className="tasks-form__text" name="todo" maxLength="22"
			       value={text}
			       onChange={e => {
				       onClickText(e.target.value);
			       }}
			       onKeyDown={e => {
				       if (e.ctrlKey && e.keyCode === 13) {
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

TodoTaskForm.propTypes = {
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
	onClickText: PropTypes.func.isRequired,
	onClickCheckbox: PropTypes.func.isRequired,
	onClickDelete: PropTypes.func.isRequired,
	onCtrlEnter: PropTypes.func.isRequired,
};


export default TodoTaskForm;