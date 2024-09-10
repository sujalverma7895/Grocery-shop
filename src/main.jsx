// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import RouterSetup from './RouterSetup';
import './index.css'; // Add any global styles here

ReactDOM.render(
  <React.StrictMode>
    <RouterSetup />
  </React.StrictMode>,
  document.getElementById('root')
);
