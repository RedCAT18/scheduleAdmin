import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const reducer = combineReducers({});

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
