
import * as actionTypes from './actionTypes';

export function addAnime(payload) {
    return dispatch => {
        return dispatch({
            type: actionTypes.ADD_ANIME,
            payload : payload
        });
    }
};

export function addDogs(payload) {
    return dispatch => {
        return dispatch({
            type: actionTypes.ADD_DOGS,
            payload : payload
        });
    }
};

export function setCurrentRef(payload) {
    return dispatch => {
        return dispatch({
            type: actionTypes.CURRENT_REF,
            payload : payload
        });
    }
};