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
  message: PropTypes.string.isRequired,
  showOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default Tooltip;
