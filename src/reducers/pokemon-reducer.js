import actionTypes from '../actions/types';
import traverse from '../modules/traverse';
import { fromNullable, of } from 'data.maybe';

const defaultState = {
  found: {},
  current: fromNullable(),
  isLoading: false,
  error: fromNullable()
};

const addPokemon = (pokemon, name, attributes) =>
  Object.assign({}, pokemon, { [name]: attributes });

const pokemonReducer = (state = defaultState, action) => {
  const { type, data } = action;

  switch (type) {
  case actionTypes.LOADING:
    return {
      ...state,
      isLoading: true
    };
  case actionTypes.LOADED:
    return {
      ...state,
      isLoading: false
    };
  case actionTypes.SEARCH_SUCCESS:
    let { name, attributes } = data;
    let found = addPokemon(state.found, name, attributes);
    let current = of(found[name]);

    return {
      found,
      current,
      error: fromNullable(),
      isLoading: false
    };
  case actionTypes.SEARCH_FAIL:
    const resolveErrorFrom = traverse(['error', 'detail']);

    return {
      found: state.found,
      current: fromNullable(),
      error: resolveErrorFrom(data),
      isLoading: false
    }
  case actionTypes.SET_CURRENT:
    return {
      ...state,
      current: of(data.current),
      error: fromNullable(),
      isLoading: false
    }
  default:
    return state;
  }
};

export default pokemonReducer;
