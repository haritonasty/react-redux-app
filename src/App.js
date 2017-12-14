import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import NotFound from './components/NotFound/NotFound';
import TodoListFormContainer from './components/TodoListForm/TodoListFormContainer';

import './App.css';


const App = () => (
	<section className="todo-list">
		<Switch>
			<Route exact path="/" component={MainPage}/>
			<Route path="/:id/edit" component={TodoListFormContainer}/>
			<Route path="/create" component={TodoListFormContainer}/>
			<Route path="*" component={NotFound} />
		</Switch>
	</section>
);


export default App;
