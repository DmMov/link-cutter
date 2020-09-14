import React from 'react';
import classnames from 'classnames';
import { string, arrayOf } from 'prop-types';

// * Sass
import './ResponsiveImage.scss';

export const ResponsiveImage = ({ src, classes }) =>
  <div className={classnames('imageContainer', classes)}>
    <img src={src} className="image"/>
  </div>;

ResponsiveImage.propTypes = {
  src: string.isRequired,
  classes: arrayOf(string)
};
