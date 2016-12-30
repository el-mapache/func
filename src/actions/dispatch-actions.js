import getPokemon from '../services/pokeapi';
import {
  searchSuccessAction,
  searchFailAction,
  loadingAction
} from './api-actions';

import store from '../store';

const get = (name) => {
  const q = name ? name : null;
  store.dispatch(loadingAction());
  getPokemon(q).fork(
    error => store.dispatch(searchFailAction(error)),
    result => store.dispatch(searchSuccessAction(name, result))
  );
};

export default get;
