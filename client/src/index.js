import React from 'react';
import { render } from 'react-dom';

// * Sass
import 'scss';

import(/* webpackChunkName: 'app' */ 'components/App')
  .then(({ App }) =>
    render(
      <App />,
      document.getElementById('root')
    )
  );