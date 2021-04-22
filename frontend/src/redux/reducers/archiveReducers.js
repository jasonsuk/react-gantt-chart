import {
    ARCHIVE_LIST_REQUEST,
    ARCHIVE_LIST_SUCCESS,
    ARCHIVE_LIST_FAIL,
} from '../constants/archiveConstants.js';

export const archiveListReducer = (state = {}, action) => {
    switch (action.type) {
        case ARCHIVE_LIST_REQUEST:
            return { loading: true, ...state };
        case ARCHIVE_LIST_SUCCESS:
            return { loading: false, archives: action.payload };
        case ARCHIVE_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return {};
    }
};
