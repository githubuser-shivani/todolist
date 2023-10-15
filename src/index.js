import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import any global CSS or styling
import App from './App'; // Import your main App component
import './App.css';
import './globalstyles.css'; // Import your global CSS file


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
