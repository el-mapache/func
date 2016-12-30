import React from 'react';
import Header from './header';
import Alert from './alert';
import Search from './search';
import Featured from './featured';
import getPokemon from '../actions/dispatch-actions';
import '../App.css';

const App = ({ error, isLoading, data: { found, current } }) =>
  <div className="App">
    <Alert error={error} />
    <div className="App-header">
      <Header />
      <Search onSearch={getPokemon} isLoading={isLoading} />
    </div>
    <div className="app-container">
      <Featured currentPokemon={current} />
    </div>
  </div>

export default App;
