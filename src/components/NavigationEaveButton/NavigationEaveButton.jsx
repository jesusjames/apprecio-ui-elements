/**
 *
 * NavigationEaveButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { NavigationEaveButtonStyled } from './style';

const NavigationEaveButton = ({
  active,
  activeIcon,
  inactiveIcon,
  name,
  onClick,
}) => (
  <NavigationEaveButtonStyled active={active} onClick={onClick}>
    <img src={active ? activeIcon : inactiveIcon} alt={name} />
    <span>{name}</span>
  </NavigationEaveButtonStyled>
);

NavigationEaveButton.defaultProps = {
  onClick: () => {},
};

NavigationEaveButton.propTypes = {
  active: PropTypes.bool.isRequired,
  activeIcon: PropTypes.string.isRequired,
  inactiveIcon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default NavigationEaveButton;
