import React from 'react';
import TodoListsContainer from './TodoListsContainer';
import ButtonNewList from './ButtonNewList';

const MainPage = ({history}) =>(
	<div>
		<TodoListsContainer/>
		<ButtonNewList history={history}/>
	</div>
);

export default MainPage;