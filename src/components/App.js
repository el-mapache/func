import React from 'react';
import Header from './header';
import Alert from './alert';
import Search from './search';
import Featured from './featured';
import getPokemon from '../actions/dispatch-actions';
import transform from './composables/Transform';
import '../app.css';

const App = ({ error, isLoading, found, current, searchValue }) =>
  <div className="App">
    <Alert error={error} />
    <div className="App-header">
      <Header />
      <Search onSearch={getPokemon} isLoading={isLoading} value={searchValue} />
    </div>
    <div className="app-container">
      <Featured currentPokemon={current} />
    </div>
  </div>

const mapStateToProps = state => {
  const { pokemon, forms } = state;

  return {
    error: pokemon.error,
    isLoading: pokemon.isLoading,
    found: pokemon.found,
    current: pokemon.current,
    searchValue: forms.search.input
  };
};


export default transform(mapStateToProps).of(App);
