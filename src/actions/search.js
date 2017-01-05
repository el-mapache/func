import store from '../store';
import { updateSearchValueAction } from './creators/search-actions';

const updateSearchValue = (value) => {
  store.dispatch(updateSearchValueAction(value));
};

export { updateSearchValue };
