import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import the global CSS file, if any

// Find the root DOM element in your HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the React application into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
