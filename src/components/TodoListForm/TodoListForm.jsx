import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodoList } from '../../actions';

const TodoListForm = ({history, dispatch}) => {
	let input;
	return (
	<section className="create-todolist">
		<form
			id="createTaskForm"
			name="mainForm"
			className="create-todolist__form"


		>
			<p id="error"> </p>
			<div className="group">
				<input type="text" required ref={node => { input = node; }} className="create-task__text"  name="task"/>
				<span className="highlight"> </span>
				<span className="bar"> </span>
				<label className="create-task__label">Title</label>
			</div>
			<button
				type="submit"
				className="create-todolist__button create-todolist__button_add"
				onClick={event => {
					history.push('/');
					event.preventDefault();
					if (!input.value.trim()) {
						return;
					}
					dispatch(addTodoList(input.value));
					input.value = '';
				}}
			>Add</button>
		</form>
			<button className="create-todolist__button create-todolist__button_close" onClick={() => {history.push('/')}}>Close</button>
	</section>
	)
};

TodoListForm.propTypes = {
	dispatch: PropTypes.func.isRequired,
};


export default connect()(TodoListForm);