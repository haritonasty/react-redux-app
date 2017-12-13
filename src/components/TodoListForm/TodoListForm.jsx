import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodoList, addTodoTask, deleteTodos, updateTodoList} from '../../actions';

import TodoTaskForm from './TodoTaskForm';

const mapStateToProps = (state) => ({
	todos: state.todos,
	todolists: state.todolists,
});


class TodoListForm extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let input;
		let id = this.props.match.params.id;
		let todos = this.props.todos;
		const mode = id ? 'edit' : 'new';
		let currentTodoList;
		if (mode === 'edit'){
			currentTodoList = this.props.todolists.find(elem => elem.id === id);

		}
		if (mode === 'edit' && !todos[todos.length-1]) {
			currentTodoList.todos.forEach(el => {
				this.props.dispatch(addTodoTask(el.id, el.completed, el.text));
				});
		}
		const title = (mode === 'edit') ? `${currentTodoList.title}` : '';
		console.log(currentTodoList);
		return (
			<section className="create-todolist">
				<form
					id="createTaskForm"
					name="mainForm"
					className="create-todolist__form"
				>
					<p id="error"> </p>
					<div className="group">
						<input autoFocus type="text"
						       defaultValue={title}
						       required ref={node => {
							input = node;
						}} className="create-todolist__text" name="task"/>
						<span className="highlight"> </span>
						<span className="bar"> </span>
						<label className="create-todolist__label">title</label>
					</div>
					<ul>
						{this.props.todos.map((todo, idx) =>
							<TodoTaskForm

								key={idx}
								{...todo}
							/>
						)}
					</ul>
					<button
						type="button"
						className="create-todolist__button create-todolist__button_add"
						onClick={event => {
							this.props.history.push('/');
							event.preventDefault();
							if (!input.value.trim()) return;
							if (mode === 'edit') this.props.dispatch(updateTodoList(id, input.value, this.props.todos));
							else this.props.dispatch(addTodoList(input.value, this.props.todos));
							this.props.dispatch(deleteTodos());
							input.value = '';
						}}
					>Save
					</button>

					<button
						type="submit"
						className="create-todo__button create-todo__button_add-task"
						onClick={event => {
							event.preventDefault();
							if (this.props.todos.length > 0) {
								if (!this.props.todos[this.props.todos.length - 1]) return;
								if (this.props.todos[this.props.todos.length - 1].text === "") return;
							}
							this.props.dispatch(addTodoTask());
						}}
					>Add Task
					</button>
				</form>
				<button className="create-todolist__button create-todolist__button_close" onClick={() => {
					this.props.dispatch(deleteTodos());
					this.props.history.push('/')
				}}>Close
				</button>
			</section>
		)
	}
}

TodoListForm.propTypes = {
	dispatch: PropTypes.func.isRequired,
};


export default connect(mapStateToProps)(TodoListForm);