import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { taskListReducer, taskCreateReducer } from './reducers/taskReducers.js';

const reducer = combineReducers({
    taskList: taskListReducer,
    taskCreate: taskCreateReducer,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
