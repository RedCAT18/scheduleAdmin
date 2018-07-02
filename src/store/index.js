import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import auth from './modules/auth';

const middlewares = [thunk];

const reducer = combineReducers({ auth });

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
