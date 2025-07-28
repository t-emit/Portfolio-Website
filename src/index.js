// src/main.jsx (or index.js)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Your MainApp.jsx
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrap your App component */}
    
      <App />
    
  </React.StrictMode>
);