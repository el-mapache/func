import actionTypes from '../actions/types';

const defaultState = {
  search: {
    input: ''
  }
};

const searchReducer = (state = defaultState, action) => {
  const { data, type } = action;

  switch(type) {
    case actionTypes.SEARCH_UPDATE_VALUE:
      return Object.assign({}, state, {
        search: {
          input: data.value
        }
      });
    case actionTypes.SEARCH_RESET:
      return defaultState;
    default:
      return state
  }
};

export default searchReducer;
