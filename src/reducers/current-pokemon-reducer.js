import actionTypes from '../actions/types';
import { fromNullable, of } from 'data.maybe'

const defaultState = {
  current: fromNullable()
};

const currentReducer = (state = defaultState, action) => {
  const { current, type } = action;

  switch(type) {
  case actionTypes.SET_CURRENT:
    return {
      current: of(current)
    };
  default:
    return state;
  }
};

export default currentReducer;
