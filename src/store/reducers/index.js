import * as actionTypes from "../actions/actionTypes";

const initialState = {
  anime: [],
  dogs: [],
  currentRef: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ANIME:
      return {
        ...state,
        anime: state.anime.concat(action.payload),
      };
    case actionTypes.ADD_DOGS:
      return {
        ...state,
        dogs: state.dogs.concat(action.payload),
      };
    case actionTypes.CURRENT_REF:
      return {
        ...state,
        currentRef: action.payload,
      };
    default:
      return state;
  }
};
