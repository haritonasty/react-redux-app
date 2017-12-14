import React from 'react';
import PropTypes from 'prop-types';

import TodoLists from './TodoLists/TodoLists';
import ButtonNewList from './Button/ButtonNewList';



const MainPage = ({history}) =>(
	<div className="todo-list__wrapper scrollable">
		<TodoLists history={history}/>
		<ButtonNewList history={history}/>
	</div>
);

MainPage.propTypes = {
	history: PropTypes.object.isRequired,
};

export default MainPage;