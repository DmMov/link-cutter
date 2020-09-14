import React from 'react';
import { string, bool, arrayOf, any } from 'prop-types';
import { Link as RouterLink, useRouteMatch } from 'react-router-dom';
import classnames from 'classnames';

export const Link = ({ to, exact, classes, children }) => {
  const match = useRouteMatch({ path: to, exact });

  return <RouterLink
    className={
      classnames('link', match && 'active', classes)
    }
    to={to}
  >
    {children}
  </RouterLink>;
}

Link.propTypes = {
  to: string.isRequired,
  exact: bool,
  classes: arrayOf(string),
  children: any
};