import actionTypes from '../types';
import nullAction from './null-action';

const updateSearchValueAction = value => ({
  type: actionTypes.SEARCH_UPDATE_VALUE,
  data: {
    value
  }
});

const resetSearchAction = nullAction(actionTypes.SEARCH_RESET);

export { updateSearchValueAction, resetSearchAction };
