import axios from 'axios';

import {
    RECORD_LIST_REQUEST,
    RECORD_LIST_SUCCESS,
    RECORD_LIST_FAIL,
} from '../constants/recordConstants.js';

export const listRecords = () => async (dispatch) => {
    try {
        dispatch({ type: RECORD_LIST_REQUEST });

        const { data } = await axios.get('/api/records');

        dispatch({ type: RECORD_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: RECORD_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
