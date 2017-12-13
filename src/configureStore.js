import { createStore } from 'redux';
import todolistsApp from './reducers/index';
import { loadState, saveState } from './localStorage';



const configureStore = () => {
	const initalState = loadState();

	const store =  createStore(todolistsApp, initalState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

	store.subscribe(() => {
		saveState({
			todolists: store.getState().todolists,
		});
	});

	return store;
};


export default configureStore;