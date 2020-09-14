import React from 'react';
import { string } from 'prop-types';

// * Components
import { ResponsiveImage } from '../ResponsiveImage/ResponsiveImage';

// * Sass
import './Banner.scss';

export const Banner = ({ image, title }) =>
  <div className="banner">
    <ResponsiveImage
      src={image}
      classes={['banner__imageContainer', 'withOverlay']}
    />
    <h2 className="banner__title">{title}</h2>
  </div>;

Banner.propTypes = {
  image: string.isRequired,
  title: string.isRequired
};