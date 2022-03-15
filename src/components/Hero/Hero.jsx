/**
 *
 * Hero
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { HeroStyled } from './style';

const Hero = ({ children, src }) => (
  <HeroStyled src={src}>
    <div>{children}</div>
  </HeroStyled>
);

Hero.defaultProps = {
  children: null,
  src: '',
};

Hero.propTypes = {
  /**
   * Los componentes hijos.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * Ruta a la imagen de fondo.
   */
  src: PropTypes.string,
};

export default Hero;
