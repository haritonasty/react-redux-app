import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {updateTodoListCompleted, deleteTodolist} from '../../../actions/index';

import TodoList from '../TodoList/TodoList';
import imgEdit from '../../../img/edit.png';
import imgDelete from '../../../img/deleteTodolist.png';



const mapStateToProps = (state) => ({
	todolists: state.todolists,
});

const mapDispatchToProps = (dispatch) => {
	return {
		onClickTodo(idList, id) {
			dispatch(updateTodoListCompleted(idList, id));
		},
		onClickDeleteTodolist(idList) {
			dispatch(deleteTodolist(idList));
		},
	}
};

const TodoListItem = ({title, todos, id, history, onClickTodo, onClickDeleteTodolist}) => {

	let li;

	return (
		<li className="todolists__item" ref={node => {li = node;}}>
			<div className="todolists__header">
				<span className="todolists__title">{title}</span>
				<img className="todolists__edit" src={imgEdit} alt="edit"
				     onClick={() => {
					     history.push(`/${id}/edit`)
				     }}
				/>
				<img className="todolists__delete" src={imgDelete} alt="delete"
				     onClick={() => {
					     li.className="todolists__item todolists__item_hidden";
					     setTimeout(()=>{onClickDeleteTodolist(id);},350);

				     }}
				/>
			</div>
			<div className="todolists__progressbar">
				<div className="todolists__progressbar_done"
				     style={{
				     	width:`${todos.length > 0 ? 100*todos.filter(todo => todo.completed === true).length / todos.length : 0}%`
				     }}
					>
				</div>
			</div>
			<TodoList todos={todos} onClickTodo={(idItem) => {
				onClickTodo(id, idItem)
			}}/>
		</li>

	)
};

TodoListItem.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired,
	}).isRequired).isRequired,
	onClickTodo: PropTypes.func.isRequired,
	onClickDeleteTodolist: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);

