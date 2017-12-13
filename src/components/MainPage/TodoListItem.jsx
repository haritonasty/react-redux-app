import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './TodoList';
import { history } from 'react-router-dom';

import { updateTodoListCompleted } from '../../actions';
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
	<li>
		<span>{title}</span>
		<button type="button" onClick={() => {history.push(`/${id}/edit`)}}>  Edit </button>
		<TodoList todos={todos}  onClickTodo={(idItem)=>{onClickTodo(id,idItem)}}/>
	</li>

);

TodoListItem.propTypes = {
	title: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);

