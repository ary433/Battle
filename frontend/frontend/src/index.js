import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new `react-dom/client`
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root with ReactDOM.createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
