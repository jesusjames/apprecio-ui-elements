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
  placeholder,
  type,
  variant,
}) => (
  <MiniInputStyled
    maxLength={maxLength || 1}
    type={type || 'text'}
    placeholder={placeholder}
    onChange={onChange}
    ref={inputRef}
    variant={variant}
  />
);

MiniInput.propTypes = {
  /**
   * Hook de referencia hacia el input.
   */
  inputRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  /**
   * La máxima longitud del input.
   */
  maxLength: PropTypes.number,
  /**
   * Función que se ejecuta cada que el usuario escribe en el input.
   */
  onChange: PropTypes.func,
  /**
   * El placeholder del input.
   */
  placeholder: PropTypes.string,
  /**
   * El tipo del input.
   */
  type: PropTypes.string,
  /**
   * La variante del input.
   */
  variant: PropTypes.oneOf(['big']),
};

export default MiniInput;
