import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Resume from './Resume'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/personal-website/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
