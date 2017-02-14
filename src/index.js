// We need:
// 1. Provider ( react-redux )
// 2. createStore ( redux )
// 3. reducers to pass to createStore( ./reducer ) ( rootReducer )
// 4. Make a rootReducer to import other reducers
// 5. Make a single reducer to import into rootreducer (4)
// 4. Create the (2) store with the reducer (3)
// 7. Wrap the Provider (1) with store prop (4) around App

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index.js'
import reduxPromise from 'redux-promise';

// const theStore = createStore(reducers);
const theStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)(reducers)

// const middleWare = applyMiddleware(reduxPromise);
// const theStore = middleWare(createStore)
// const theStoreWithReducers = theStore(reducers)




ReactDOM.render(
	<Provider store={theStoreWithMiddleware}>
		<App />
	</Provider>,
  document.getElementById('root')
);
