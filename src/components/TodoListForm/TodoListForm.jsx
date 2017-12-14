import React from 'react';
import PropTypes from 'prop-types';

import TodoTaskForm from './TodoTaskForm';


const TodoListForm = ({todos, match, history, todolists, events}) => {
	let input;
	let buttonSave;
	let currentTodoList;
	let id = match.params.id;

	const mode = id ? 'edit' : 'new';

	if (mode === 'edit') currentTodoList = todolists.find(elem => elem.id === id);
	if (mode === 'edit' && !todos[todos.length - 1]) {
		currentTodoList.todos.forEach(el => {
			events.onClickButtonAddTask(el.id, el.completed, el.text);
		});
	}

	const title = (mode === 'edit') ? `${currentTodoList.title}` : '';


	return (
		<section className="create-todolist">
			<form id="createTaskForm" name="mainForm" className="create-todolist__form">
				<p id="error"> </p>
				<div className="group">
					<input autoFocus required type="text" className="create-todolist__text" name="task" maxLength="20"
					       defaultValue={title}
					       ref={node => {
						       input = node;
					       }}
					/>
					<span className="highlight"> </span>
					<span className="bar"> </span>
					<label className="create-todolist__label">Title</label>
				</div>
				<ul className="tasks-form scrollable">
					{todos.map((todo, idx) =>
						<TodoTaskForm
							key={idx}
							{...todo}
							onClickText={(text) => events.onClickText(todo.id, text)}
							onClickCheckbox={(completed) => events.onClickCheckbox(todo.id, completed)}
							onClickDelete={() => {
								if (todos.length === 1) events.onClickText(todo.id, '');
								else events.onClickDelete(todo.id);
							}}
							onCtrlEnter={()=>{ buttonSave.click();}}
						/>
					)}
				</ul>
				<button type="button" className="create-todolist__button create-todolist__button_save" ref={node => {buttonSave = node;}}
				        onClick={event => {
					        event.preventDefault();
					        if (!input.value.trim()) {
						        input.className = "create-todolist__text create-todolist__text_error";
						        input.nextSibling.nextSibling.nextSibling.className = "create-todolist__label create-todolist__label_error";
						        setTimeout(() => {
							        input.className = "create-todolist__text";
							        input.nextSibling.nextSibling.nextSibling.className = "create-todolist__label";
						        }, 1000);
						        return;
					        }

					        if (mode === 'edit') events.onClickButtonSaveOldList(id, input.value, todos);
					        else events.onClickButtonSaveNewList(input.value, todos);
					        events.onClickButtonClose();

					        input.value = '';
					        history.push('/');
				        }}
				>Save
				</button>

				<button type="submit" className="create-todolist__button create-todolist__button_add-task"
				        onClick={event => {
					        event.preventDefault();
					        if (todos.length > 0) {
						        if (!todos[todos.length - 1]) return;
						        if (todos[todos.length - 1].text === "") return;
					        }
					        events.onClickButtonAddTask();
				        }}
				>+1
				</button>
			</form>
			<button className="create-todolist__button create-todolist__button_close"
			        onClick={() => {
				        events.onClickButtonClose();
				        history.push('/');
			        }}
			>Close
			</button>
		</section>
	)
};

TodoListForm.propTypes = {};

export default TodoListForm;
