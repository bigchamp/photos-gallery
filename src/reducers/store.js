import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

//Add reducer
import {reducers} from './';

export const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk)
));
