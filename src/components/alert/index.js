import React from 'react';
import './alert.css';

const showError = error =>
  <p className="alert warning">{error}</p>

const Alert = ({error}) =>
  <div>
    {
      error
        .map(showError)
        .getOrElse(null)
    }
  </div>

export default Alert;
