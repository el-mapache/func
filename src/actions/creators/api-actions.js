import actionTypes from '../types';
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

const searchFailAction = (error, query) => ({
  type: actionTypes.SEARCH_FAIL,
  data: {
    error: error,
    query: query
  }
});

const setCurrentAction = current => ({
  type: actionTypes.SET_CURRENT,
  data: {
    current
  }
});

export {
  loadingAction,
  loadedAction,
  searchSuccessAction,
  searchFailAction,
  setCurrentAction
};
