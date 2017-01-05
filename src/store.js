import { createStore, combineReducers, applyMiddleware } from 'redux';
import pokemonReducer from './reducers/pokemon-reducer';
import searchFormReducer from './reducers/search-form-reducer';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
};

const state = combineReducers({
  pokemon: pokemonReducer,
  forms: searchFormReducer
});

export default createStore(state, applyMiddleware(logger));
