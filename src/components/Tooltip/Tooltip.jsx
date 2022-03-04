/**
 *
 * Tooltip
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { TooltipStyled } from './style';

const Tooltip = ({ message, onClick, showOn }) => (
  <TooltipStyled showOn={showOn} onClick={onClick}>
    <p>{message}</p>
  </TooltipStyled>
);

Tooltip.defaultProps = {
  onClick: () => {},
};

Tooltip.propTypes = {
  /**
   * El mensaje a mostrar en el tooltip.
   */
  message: PropTypes.string.isRequired,
  /**
   * Variable que determina si se mueve el tooltip o no.
   */
  showOn: PropTypes.bool.isRequired,
  /**
   * Función a ejecutar al hacer click en el tooltip.
   */
  onClick: PropTypes.func,
};

export default Tooltip;
