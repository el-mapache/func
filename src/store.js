import { createStore, applyMiddleware } from 'redux';
import pokemonReducer from './reducers/pokemon-reducer';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default createStore(pokemonReducer, applyMiddleware(logger));
