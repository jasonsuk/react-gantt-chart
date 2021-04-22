import axios from 'axios';

import {
    ARCHIVE_LIST_REQUEST,
    ARCHIVE_LIST_SUCCESS,
    ARCHIVE_LIST_FAIL,
} from '../constants/archiveConstants.js';

export const listArchives = () => async (dispatch) => {
    try {
        dispatch({ type: ARCHIVE_LIST_REQUEST });

        const { data } = await axios.get('/api/archives');
        dispatch({ type: ARCHIVE_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ARCHIVE_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
