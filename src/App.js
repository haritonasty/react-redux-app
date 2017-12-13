import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import TodoListFormContainer from './components/TodoListForm/TodoListFormContainer';

import './App.css';


class App extends Component {
	render() {
		return (
			<section className="todo-list">
					<Switch>
						<Route  exact path="/" component={MainPage}/>
						<Route  path="/:id/edit" component={TodoListFormContainer}/>
						<Route  path="/create" component={TodoListFormContainer}/>
					</Switch>
			</section>
		);
	}
}

export default App;
