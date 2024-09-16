// src/RouterSetup.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import DetailPage from './DetailPage';
import Cartcomponent from './Cartcomponent'
import LoginComponent from './LoginComponent'
import PaymentComponent from "./PaymentComponent"
import Catalog from "./Catalog"
const RouterSetup = () => {
  return (
    <Router>
      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/details" element={<DetailPage />} />
        <Route path="/Cartcomponent" element={<Cartcomponent />} />
        <Route path="/" element={<LoginComponent />} />
        <Route path="/PaymentComponent" element={<PaymentComponent />} />
        <Route path="/catalog" element={<Catalog/>} />
      </Routes>
    </Router>
  );
};

export default RouterSetup;
