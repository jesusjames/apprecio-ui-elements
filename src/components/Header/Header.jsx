/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import {
  H1Styled,
  H2Styled,
  H3Styled,
  H4Styled,
  H5Styled,
  H6Styled,
  ErrorStyled,
} from './style';

const Header = ({
  color,
  message,
  mini,
  textAlign,
  variant,
}) => {
  switch (variant) {
    case 'h2':
      return (
        <H2Styled
          textAlign={textAlign}
          color={color}
        >
          {message}
        </H2Styled>
      );
    case 'h3':
      return (
        <H3Styled
          textAlign={textAlign}
          color={color}
        >
          {message}
        </H3Styled>
      );
    case 'h4':
      return (
        <H4Styled
          textAlign={textAlign}
          color={color}
        >
          {message}
        </H4Styled>
      );
    case 'h5':
      return (
        <H5Styled
          textAlign={textAlign}
          color={color}
        >
          {message}
        </H5Styled>
      );
    case 'h6':
      return (
        <H6Styled
          textAlign={textAlign}
          color={color}
        >
          {message}
        </H6Styled>
      );
    case 'error':
      return (
        <ErrorStyled
          textAlign={textAlign}
          color={color}
        >
          {message}
        </ErrorStyled>
      );
    default:
      return (
        <H1Styled
          textAlign={textAlign}
          color={color}
          mini={mini || false}
        >
          {message}
        </H1Styled>
      );
  }
};

Header.defaultProps = {
  color: 'yellow',
  message: '',
  mini: false,
  textAlign: 'left',
  variant: 'h1',
};

Header.propTypes = {
  /**
   * El color del texto,
   */
  color: PropTypes.oneOf(['white', 'yellow']),
  /**
   * El mensaje a mostrarse.
   */
  message: PropTypes.string,
  /**
   * Reduce el ancho del texto.
   */
  mini: PropTypes.bool,
  /**
   * Alineación del texto.
   */
  textAlign: PropTypes.string,
  /**
   * Las distintas variantes del texto.
   */
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'error']),
};

export default Header;
