import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import TodoListForm from './components/TodoListForm/TodoListForm';

import './App.css';


class App extends Component {
	render() {
		return (
			<section className="todo-list">
				<div className="todo-list__wrapper">
					<Switch>
						<Route  exact path="/" component={MainPage}/>
						<Route  path="/:id/edit" component={TodoListForm}/>
						<Route  path="/create" component={TodoListForm}/>
					</Switch>
				</div>
			</section>
		);
	}
}

export default App;
