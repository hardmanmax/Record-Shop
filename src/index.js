import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './Context/user.context';
import { CategoriesProvider } from './Context/categories.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>
);
