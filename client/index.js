import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import RepositoryList from './components/repository-list';
import store from './store';

const repositories = [
	{name: 'first', rating: 5}, {name: 'second', rating: 3}
	]

document.addEventListener('DOMContentLoaded', () => 
	ReactDOM.render(
		<Provider store={store}>
			<RepositoryList repositories={repositories} />
		</Provider>,
		document.getElementById('app'))
);