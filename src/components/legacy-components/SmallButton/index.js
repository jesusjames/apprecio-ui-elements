/**
 *
 * SmallButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import theme, { roundingMapping, spacingMapping } from '../../utils/theme';

const Container = styled.button`
  background-color: ${props => {
    if (props.transparent) {
      return 'transparent';
    }
    if (props.secondary) {
      return theme.palette.secondary;
    }
    return theme.palette.primary;
  }};
  border-color: ${props => {
    if (props.borderless) {
      return 'transparent';
    }
    if (!props.transparent) {
      return theme.palette.white;
    }
    if (props.secondary) {
      return theme.palette.secondary;
    }
    return theme.palette.white;
  }};
  box-shadow: 0 0 10px ${theme.palette.shadow.white};
  border-radius: ${props => roundingMapping(props.rounding)};
  border-style: solid;
  border-width: 2px;
  color: ${props => {
    if (!props.transparent) {
      return theme.palette.white;
    }
    if (props.secondary) {
      return theme.palette.secondary;
    }
    return theme.palette.white;
  }};
  font-family: ${theme.typeface.default};
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};
  height: 75px;
  width: 75px;
  z-index: 20;
  position: ${props => props.position};
  top: ${props => props.top}px;

  &:hover {
    cursor: pointer;
  }
`;

function SmallButton({
  m1,
  m2,
  m3,
  m4,
  m5,
  mt1,
  mt2,
  mt3,
  mt4,
  mt5,
  mb1,
  mb2,
  mb3,
  mb4,
  mb5,
  circled,
  wedged,
  noRounding,
  borderless,
  icon,
  secondary,
  transparent,
  onClick,
  position,
  top,
}) {
  return (
    <Container
      margin={(() => {
        if (m5) return '5';
        if (m4) return '4';
        if (m3) return '3';
        if (m2) return '2';
        if (m1) return '1';
        return '0';
      })()}
      marginTop={(() => {
        if (mt5) return '5';
        if (mt4) return '4';
        if (mt3) return '3';
        if (mt2) return '2';
        if (mt1) return '1';
        return null;
      })()}
      marginBottom={(() => {
        if (mb5) return '5';
        if (mb4) return '4';
        if (mb3) return '3';
        if (mb2) return '2';
        if (mb1) return '1';
        return null;
      })()}
      rounding={(() => {
        if (circled) return 'circled';
        if (wedged) return 'wedged';
        if (noRounding) return 'none';
        return 'rounded';
      })()}
      borderless={borderless}
      secondary={secondary}
      transparent={transparent}
      position={position || 'static'}
      top={top || 0}
      onClick={onClick}
    >
      <img src={icon} alt="" />
    </Container>
  );
}

SmallButton.propTypes = {
  m1: PropTypes.bool,
  m2: PropTypes.bool,
  m3: PropTypes.bool,
  m4: PropTypes.bool,
  m5: PropTypes.bool,
  mt1: PropTypes.bool,
  mt2: PropTypes.bool,
  mt3: PropTypes.bool,
  mt4: PropTypes.bool,
  mt5: PropTypes.bool,
  mb1: PropTypes.bool,
  mb2: PropTypes.bool,
  mb3: PropTypes.bool,
  mb4: PropTypes.bool,
  mb5: PropTypes.bool,
  circled: PropTypes.bool,
  wedged: PropTypes.bool,
  noRounding: PropTypes.bool,
  borderless: PropTypes.bool,
  secondary: PropTypes.bool,
  transparent: PropTypes.bool,
  icon: PropTypes.any,
  position: PropTypes.string,
  top: PropTypes.number,
  onClick: PropTypes.func,
};

export default SmallButton;
