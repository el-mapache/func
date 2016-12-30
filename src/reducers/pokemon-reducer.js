import actionTypes from '../actions/api-action-types';
import traverse from '../modules/traverse';
import { fromNullable, of } from 'data.maybe';

const defaultState = {
  data: {
    found: {},
    current: fromNullable(),
  },
  isLoading: false,
  error: fromNullable()
};

const addPokemon = (pokemon, name, attributes) => {
  if (name in pokemon) {
    return Object.assign({}, pokemon);
  }

  return Object.assign({}, pokemon, {[name]: attributes});
};

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
    let found = addPokemon(state.data.found, name, attributes);
    let current = of(found[name]);

    return {
      data: {
        found,
        current
      },
      error: fromNullable(),
      isLoading: false
    };
  case actionTypes.SEARCH_FAIL:
    const resolveErrorFrom = traverse(['error', 'detail']);

    return {
      ...state,
      error: resolveErrorFrom(data),
      isLoading: false
    }
  default:
    return state;
  }
};

export default pokemonReducer;
