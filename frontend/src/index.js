import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './app/shared/contexts/AuthContext';
import { MovieProvider } from './app/shared/contexts/MovieContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <MovieProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </MovieProvider>
    </Router>
  </React.StrictMode>
);
