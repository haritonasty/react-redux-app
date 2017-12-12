import { combineReducers } from 'redux';
// import todos from './todos';
import todolists from './todolists';
// import visibilityFilter from './visibilityFilter';

const todolistsApp = combineReducers({
	// todos,
	// visibilityFilter,
	 todolists,
});

export default todolistsApp;