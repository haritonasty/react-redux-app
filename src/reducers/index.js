import { combineReducers } from 'redux';
import todos from './todos';
import todolists from './todolists';

const todolistsApp = combineReducers({
	 todos,
	 todolists,
});

export default todolistsApp;