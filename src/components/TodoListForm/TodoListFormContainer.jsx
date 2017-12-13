import React from 'react';
import {connect} from 'react-redux';
import {addTodoList, addTodoTask, deleteTodos, updateTodoList, updateTodoTaskText, updateTodoTaskCompleted, deleteTodoTask } from '../../actions';

import TodoListForm from './TodoListForm';

const mapStateToProps = (state) => ({
	todos: state.todos,
	todolists: state.todolists,
});

const mapDispatchToProps = (dispatch) => {
	return {
		events: {
			onClickText(id, text) {
				dispatch(updateTodoTaskText(id, text));
			},
			onClickCheckbox(id, completed) {
				dispatch(updateTodoTaskCompleted(id, completed));
			},
			onClickDelete(id) {
				dispatch(deleteTodoTask(id));
			},
			onClickButtonAddTask(id, completed, text) {
				dispatch(addTodoTask(id, completed, text));
			},
			onClickButtonClose() {
				dispatch(deleteTodos());
			},
			onClickButtonSaveOldList(id, title, todos) {
				dispatch(updateTodoList(id, title, todos));
			},
			onClickButtonSaveNewList(title, todos) {
				dispatch(addTodoList(title, todos));
			},
		}
	}
};

const TodoListFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoListForm);

export default TodoListFormContainer;


