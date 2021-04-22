import axios from 'axios';

import {
    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_LIST_FAIL,
    TASK_LIST_SINGLE_REQUEST,
    TASK_LIST_SINGLE_SUCCESS,
    TASK_LIST_SINGLE_FAIL,
    TASK_CREATE_REQUEST,
    TASK_CREATE_SUCCESS,
    TASK_CREATE_FAIL,
    TASK_DELETE_REQUEST,
    TASK_DELETE_SUCCESS,
    TASK_DELETE_FAIL,
    TASK_EDIT_REQUEST,
    TASK_EDIT_SUCCESS,
    TASK_EDIT_FAIL,
    TASK_ARCHIVE_REQUEST,
    TASK_ARCHIVE_SUCCESS,
    TASK_ARCHIVE_FAIL,
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

export const listSingleTask = (id) => async (dispatch) => {
    try {
        dispatch({ type: TASK_LIST_SINGLE_REQUEST });

        const { data } = await axios.get(`/api/tasks/${id}`);

        dispatch({ type: TASK_LIST_SINGLE_SUCCESS, payload: data });
        //
    } catch (error) {
        dispatch({
            type: TASK_LIST_SINGLE_FAIL,
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

export const deleteTask = (id) => async (dispatch) => {
    try {
        dispatch({ type: TASK_DELETE_REQUEST });

        await axios.delete(`/api/tasks/${id}/delete`);
        dispatch({ type: TASK_DELETE_SUCCESS });
        //
    } catch (error) {
        dispatch({
            type: TASK_DELETE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const editTask = (task) => async (dispatch) => {
    try {
        dispatch({ type: TASK_EDIT_REQUEST });

        // Params id
        const paramId = task.taskId;

        // Delete task id
        delete task.taskId;

        const { data } = await axios.put(`/api/tasks/${paramId}/edit`, task);
        dispatch({ type: TASK_EDIT_SUCCESS, payload: data });

        //
    } catch (error) {
        dispatch({
            type: TASK_EDIT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};

export const archiveTask = (id) => async (dispatch) => {
    try {
        dispatch({ type: TASK_ARCHIVE_REQUEST });

        const { data } = await axios.post(`/api/tasks/${id}/archive`);
        dispatch({ type: TASK_ARCHIVE_SUCCESS, payload: data });
        //
    } catch (error) {
        dispatch({
            type: TASK_ARCHIVE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
