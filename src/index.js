import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Provider from './components/provider';
import './index.css';

const application =
  <Provider>
    <App />
  </Provider>

ReactDOM.render(application, document.getElementById('root'));
