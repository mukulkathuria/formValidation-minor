import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Authentication} from './Contexts/AuthContext';

ReactDOM.render(
  <Authentication>
    <App />
  </Authentication>,
  document.getElementById('root')
);

