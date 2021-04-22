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
    TASK_CREATE_RESET,
    TASK_DELETE_REQUEST,
    TASK_DELETE_SUCCESS,
    TASK_DELETE_FAIL,
    TASK_DELETE_RESET,
    TASK_EDIT_REQUEST,
    TASK_EDIT_SUCCESS,
    TASK_EDIT_FAIL,
    TASK_EDIT_RESET,
    TASK_ARCHIVE_REQUEST,
    TASK_ARCHIVE_SUCCESS,
    TASK_ARCHIVE_FAIL,
    TASK_ARCHIVE_RESET,
} from '../constants/taskConstants.js';

export const taskListReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_LIST_REQUEST:
            return { loading: true, ...state };
        case TASK_LIST_SUCCESS:
            return { loading: false, tasks: action.payload };
        case TASK_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const taskListSingleReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_LIST_SINGLE_REQUEST:
            return { loading: true, ...state };
        case TASK_LIST_SINGLE_SUCCESS:
            return { loading: false, task: action.payload };
        case TASK_LIST_SINGLE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const taskCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_CREATE_REQUEST:
            return { loading: true, ...state };
        case TASK_CREATE_SUCCESS:
            return { loading: false, success: true, task: action.payload };
        case TASK_CREATE_FAIL:
            return { loading: false, error: action.payload };
        case TASK_CREATE_RESET:
            return {};
        default:
            return state;
    }
};

export const taskDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_DELETE_REQUEST:
            return { loading: true, ...state };
        case TASK_DELETE_SUCCESS:
            return { loading: false, success: true, payload: action.payload };
        case TASK_DELETE_FAIL:
            return { loading: false, error: action.payload };
        case TASK_DELETE_RESET:
            return {};
        default:
            return state;
    }
};

export const taskEditReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_EDIT_REQUEST:
            return { loading: true, ...state };
        case TASK_EDIT_SUCCESS:
            return { loading: false, success: true, payload: action.payload };
        case TASK_EDIT_FAIL:
            return { loading: false, error: action.payload };
        case TASK_EDIT_RESET:
            return {};
        default:
            return state;
    }
};

export const taskArchiveReducer = (state = {}, action) => {
    switch (action.type) {
        case TASK_ARCHIVE_REQUEST:
            return { loading: true, ...state };
        case TASK_ARCHIVE_SUCCESS:
            return { loading: false, success: true, task: action.payload };
        case TASK_ARCHIVE_FAIL:
            return { loading: false, error: action.payload };
        case TASK_ARCHIVE_RESET:
            return {};
        default:
            return state;
    }
};
