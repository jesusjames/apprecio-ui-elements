/**
 *
 * Tooltip
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../../utils/theme';

const StyledTooltip = styled.div`
  position: absolute;
  z-index: 10;
  top: 140px;
  right: 20px;

  width: 250px;
  height: auto;
  overflow: ${props => (props.showOn ? 'visible' : 'hidden')};

  transform: ${props => (props.showOn ? 'scale(1, 1)' : 'scale(0, 0)')};

  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;

  background-color: ${theme.palette.quaternary};
  border-radius: ${theme.rounding.rounded};

  &::before {
    content: '';

    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 10px solid ${theme.palette.quaternary};

    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  p {
    margin: 5px;
    font-family: ${theme.typeface.default};
    font-size: 0.8rem;
    line-height: 1.4;
    text-align: center;
    color: ${theme.palette.white};
    font-weight: 600;
    text-transform: uppercase;
  }
`;

function Tooltip({ message, showOn, onClick }) {
  return (
    <StyledTooltip showOn={showOn} onClick={onClick}>
      <p>{message}</p>
    </StyledTooltip>
  );
}

Tooltip.propTypes = {
  message: PropTypes.string.isRequired,
  showOn: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default Tooltip;
