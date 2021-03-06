import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
    taskListReducer,
    taskListSingleReducer,
    taskCreateReducer,
    taskDeleteReducer,
    taskEditReducer,
    taskArchiveReducer,
} from './reducers/taskReducers.js';

import { archiveListReducer } from './reducers/archiveReducers.js';

const reducer = combineReducers({
    taskList: taskListReducer,
    taskListSingle: taskListSingleReducer,
    taskCreate: taskCreateReducer,
    taskDelete: taskDeleteReducer,
    taskEdit: taskEditReducer,
    taskArchive: taskArchiveReducer,
    archiveList: archiveListReducer,
});

const initialState = {};

const middlewares = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
