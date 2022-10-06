export const SET_DECODED_DATA = 'SET_DECODED_DATA'

export const setDecodedData = decoded => dispatch => {
    dispatch({
        type:  SET_DECODED_DATA,
        payload: decoded
    });
};