import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import arrayFindPolyfill from './polyfills/ArrayFindPolyfill';

import App from './App';
import configureStore from './configureStore';

const store = configureStore();

const render = Component => {
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<AppContainer>
					<Component/>
				</AppContainer>
			</Router>
		</Provider>,
		document.getElementById('root'),
	)
};
render(App);

if (module.hot) {
	module.hot.accept('./App', () => {
		render(App)
	})
}

if (!window.Array.find) {
	arrayFindPolyfill();
}
