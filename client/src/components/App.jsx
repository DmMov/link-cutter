import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from '../routes';

// * Sass
import './App.scss';
import { useAuth } from '../hooks/auth.hook';
import { AuthContext } from '../context/AuthContext';
import { Header } from './Header/Header';

export const App = () => {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return <AuthContext.Provider value={{
    token, login, logout, userId, isAuthenticated
  }}>
    <Router>
      <div id="app">
        <Header />
        {routes}
      </div>
    </Router>
  </AuthContext.Provider>;
}