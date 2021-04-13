import {
    RECORD_LIST_REQUEST,
    RECORD_LIST_SUCCESS,
    RECORD_LIST_FAIL,
} from '../constants/recordConstants.js';

export const recordListReducer = (state = {}, action) => {
    switch (action.type) {
        case RECORD_LIST_REQUEST:
            return { loading: true, ...state };
        case RECORD_LIST_SUCCESS:
            return { loading: false, records: action.payload };
        case RECORD_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};
