import React from 'react';
import TodoLists from './TodoLists/TodoLists';
import ButtonNewList from './Button/ButtonNewList';
import { connect } from 'react-redux';



const MainPage = ({history}) =>(
	<div className="todo-list__wrapper scrollable">
		<TodoLists history={history}/>
		<ButtonNewList history={history}/>
	</div>
);

export default connect()(MainPage);