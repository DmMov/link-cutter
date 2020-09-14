import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from '../routes';

// * Sass
import './App.scss';

export const App = () => {
  const routes = useRoutes(false);

  return <Router>
    <div id="app">
      {routes}
    </div>
  </Router>;
}