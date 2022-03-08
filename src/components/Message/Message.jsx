/**
 *
 * Message
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { MessageStyled } from './style';

const Message = ({
  children,
  fullWidth,
  secondary,
  textAlign,
  textTransform,
  variant,
}) => (
  <MessageStyled
    secondary={secondary}
    textAlign={textAlign || 'center'}
    textTransform={textTransform || 'none'}
    variant={variant}
    fullWidth={fullWidth}
  >
    {children}
  </MessageStyled>
);

Message.defaultProps = {
  children: null,
  fullWidth: false,
  secondary: false,
  textAlign: 'center',
  textTransform: 'none',
  variant: null,
};

Message.propTypes = {
  /**
   * Los componentes hijos.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * Determina si el ancho del componente deben ser 100% del del padre.
   */
  fullWidth: PropTypes.bool,
  /**
   * Determina si se debe utilizar el color secundario.
   */
  secondary: PropTypes.bool,
  /**
   * La alineación del texto.
   */
  textAlign: PropTypes.string,
  /**
   * Transformaciones del texto.
   */
  textTransform: PropTypes.string,
  /**
   * Variaciones estilísticas del componente.
   */
  variant: PropTypes.oneOf(['yellow', 'tertiary', 'smallRed']),
};

export default Message;
