/**
 *
 * MiniInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { MiniInputStyled } from './style';

const MiniInput = ({
  inputRef,
  maxLength,
  onChange,
  type,
  color,
  ...rest
}) => (
  <MiniInputStyled
    maxLength={maxLength || 1}
    type={type || 'text'}
    onChange={onChange}
    ref={inputRef}
    color={color}
    {...rest}
  />
);

MiniInput.propTypes = {
  /**
   * Hook de referencia hacia el input.
   */
  inputRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  /**
   * La máxima longitud del input.
   */
  maxLength: PropTypes.number,
  /**
   * Función que se ejecuta cada que el usuario escribe en el input.
   */
  onChange: PropTypes.func,
  /**
   * El tipo del input.
   */
  type: PropTypes.string,
  /** El color de la paleta que se usará para el componente. */
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
};

export default MiniInput;
