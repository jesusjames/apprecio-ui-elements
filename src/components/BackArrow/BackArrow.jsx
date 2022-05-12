/**
 *
 * BackArrow
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ArrowDownIcon, TextStyled } from './style';

const BackArrow = ({
  onClick, text, fontSize, ...rest
}) => (
  <button className="ap-flex ap-flex-row" type="button" onClick={onClick} style={{ cursor: 'pointer' }} {...rest}>
    <ArrowDownIcon className="ap-mx-auto" />
    <TextStyled fontSize={fontSize}>{text}</TextStyled>
  </button>
);

BackArrow.defaultProps = {
  text: '',
};

BackArrow.propTypes = {
  /**
   * Función que se ejecuta cuando se hace click en el botón.
   */
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default BackArrow;
