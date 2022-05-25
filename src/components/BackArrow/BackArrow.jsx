/**
 *
 * BackArrow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ArrowDownIcon, TextStyled } from './style';

const BackArrow = ({
  onClick, text, fontSize, color, ...rest
}) => (
  <button
    className="ap-flex ap-flex-row"
    type="button"
    onClick={onClick}
    style={{ cursor: 'pointer' }}
    {...rest}
  >
    <ArrowDownIcon className="ap-mx-auto" fontSize={fontSize} color={color} />
    <TextStyled fontSize={fontSize} color={color}>{text}</TextStyled>
  </button>
);

BackArrow.defaultProps = {
  text: '',
  color: 'primary',
};

BackArrow.propTypes = {
  /**
   * Función que se ejecuta cuando se hace click en el botón.
   */
  onClick: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
};

export default BackArrow;
