import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../TodoList/TodoList';

import {updateTodoListCompleted, deleteTodolist} from '../../../actions/index';
import {connect} from 'react-redux';
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

const TodoListItem = ({title, todos, id, history, dispatch, onClickTodo, onClickDeleteTodolist}) => {

	let li;

	return (
		<li className="todolists__item" ref={node => {li = node;}}>
			<div className="todolists__header">
				<span className="todolists__title">{title}</span>
				<img className="todolists__edit" src={imgEdit}
				     onClick={() => {
					     history.push(`/${id}/edit`)
				     }}
				/>
				<img className="todolists__delete" src={imgDelete}
				     onClick={() => {
					     li.className="todolists__item todolists__item_hidden";
					     setTimeout(()=>{onClickDeleteTodolist(id);},350);

				     }}
				/>
			</div>
			<TodoList todos={todos} onClickTodo={(idItem) => {
				onClickTodo(id, idItem)
			}}/>
		</li>

	)
};

TodoListItem.propTypes = {
	title: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);

