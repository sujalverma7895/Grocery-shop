// src/RouterSetup.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import DetailPage from './DetailPage';
import Cartcomponent from './Cartcomponent'
const RouterSetup = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details" element={<DetailPage />} />
        <Route path="/Cartcomponent" element={<Cartcomponent />} />
      </Routes>
    </Router>
  );
};

export default RouterSetup;
