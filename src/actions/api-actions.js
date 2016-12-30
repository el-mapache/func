import actionTypes from './api-action-types';
import nullAction from './null-action';

const loadingAction = nullAction(actionTypes.LOADING);
const loadedAction = nullAction(actionTypes.LOADED);

const searchSuccessAction = (name, attributes) => ({
  type: actionTypes.SEARCH_SUCCESS,
  data: {
    name,
    attributes
  }
});

const searchFailAction = error => ({
  type: actionTypes.SEARCH_FAIL,
  data: {
    error: error
  }
});

export {
  loadingAction,
  loadedAction,
  searchSuccessAction,
  searchFailAction
};
