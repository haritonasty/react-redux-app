import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../TodoList/TodoList';

import { updateTodoListCompleted } from '../../../actions/index';
import { connect } from 'react-redux';



const mapStateToProps = (state) => ({
	todolists: state.todolists,
});

const mapDispatchToProps = (dispatch) => {
	return {
			onClickTodo(idList, id) {
				dispatch(updateTodoListCompleted(idList, id));
			},
	}
};

const TodoListItem = ({title, todos, id, history, dispatch, onClickTodo}) => (
	<li className="todolists__item">
		<div className="todolists__header">
			<span className="todolists__title">{title}</span>
			<img className="todolists__edit" src='../../../img/edit.png'
			        onClick={() => {history.push(`/${id}/edit`)}}
			/>
		</div>
		<TodoList todos={todos}  onClickTodo={(idItem)=>{onClickTodo(id,idItem)}}/>
	</li>

);

TodoListItem.propTypes = {
	title: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);

