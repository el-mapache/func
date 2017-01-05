import getPokemon from '../services/pokeapi';
import Either from 'data.either';
import {
  searchSuccessAction,
  searchFailAction,
  loadingAction,
  setCurrentAction
} from './creators/api-actions';

import { resetSearchAction } from './creators/search-actions';
import store from '../store';

// Check store to see if pokemon is cached
const shouldGetPokemon = name =>
  Either.fromNullable(store.getState().pokemon.found[name]);

const makeGetRequest = name => () =>
  getPokemon(name).fork(
    error => store.dispatch(searchFailAction(error, name)),
    result => {
      store.dispatch(searchSuccessAction(name, result));
      store.dispatch(resetSearchAction());
    });

const get = (name) => {
  store.dispatch(loadingAction());

  // call method on either side of the disjunction
  // Left: cache miss, call web api
  // Right: cache hit, set the current pokemon to the cached results
  shouldGetPokemon(name)
    .fold(
      makeGetRequest(name),
      x => store.dispatch(setCurrentAction(x))
    );
};

export default get;
