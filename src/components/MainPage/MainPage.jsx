import React from 'react';
import TodoListsContainer from './TodoListsContainer';
import ButtonNewList from './ButtonNewList';
import { connect } from 'react-redux';

const MainPage = ({history}) =>(
	<div>

		<TodoListsContainer history={history}/>
		<ButtonNewList history={history}/>
	</div>
);

export default connect()(MainPage);