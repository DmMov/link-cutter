import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from '../routes';
import { useAuth } from '../hooks/auth.hook';
import { AuthContext } from '../context/AuthContext';
import { Header } from './Header/Header';
import { Loader } from './Loader/Loader';

// * Sass
import './App.scss';

export const App = () => {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!ready) {
    return <Loader />;
  }

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