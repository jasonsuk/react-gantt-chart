import axios from 'axios';

import {
    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_LIST_FAIL,
    TASK_CREATE_REQUEST,
    TASK_CREATE_SUCCESS,
    TASK_CREATE_FAIL,
} from '../constants/taskConstants.js';

export const listTasks = () => async (dispatch) => {
    try {
        dispatch({ type: TASK_LIST_REQUEST });

        const { data } = await axios.get('/api/tasks');

        dispatch({ type: TASK_LIST_SUCCESS, payload: data });
        //
    } catch (error) {
        dispatch({
            type: TASK_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const createTask = () => async (dispatch) => {
    try {
        dispatch({ type: TASK_CREATE_REQUEST });

        const { data } = await axios.post('/api/tasks');
        dispatch({ type: TASK_CREATE_SUCCESS, payload: data });
        //
    } catch (error) {
        dispatch({
            type: TASK_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
