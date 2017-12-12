import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodoList, addTodoTask, deleteTodos} from '../../actions';

import TodoTaskForm from './TodoTaskForm';

const mapStateToProps = (state) => ({
	todos: state.todos
});


class TodoListForm extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
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
						<input autoFocus type="text" required ref={node => {
							input = node;
						}} className="create-todolist__text" name="task"/>
						<span className="highlight"> </span>
						<span className="bar"> </span>
						<label className="create-todolist__label">{this.props.todos.text}</label>
					</div>
					<ul>
						{this.props.todos.map(todo =>
							<TodoTaskForm

								key={todo.id}
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
							this.props.dispatch(addTodoList(input.value, this.props.todos));
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
};

TodoListForm.propTypes = {
	dispatch: PropTypes.func.isRequired,
};


export default connect(mapStateToProps)(TodoListForm);