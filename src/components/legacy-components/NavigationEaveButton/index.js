/**
 *
 * NavigationEaveButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;

  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & > img {
    padding: 6px;

    width: 60px;
    height: 35px;

    border-radius: ${theme.rounding.wedged};

    z-index: 20;

    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  & > span {
    margin-top: ${theme.spacing[1]};

    color: ${props =>
    props.active ? theme.palette.text.primary : theme.palette.disabled};
    font-family: ${theme.typeface.default};
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
`;

function NavigationEaveButton({
  active,
  activeIcon,
  inactiveIcon,
  name,
  onClick,
}) {
  return (
    <StyledContainer active={active} onClick={onClick}>
      <img src={active ? activeIcon : inactiveIcon} alt={name} />
      <span>{name}</span>
    </StyledContainer>
  );
}

NavigationEaveButton.propTypes = {
  active: PropTypes.bool,
  activeIcon: PropTypes.string,
  inactiveIcon: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavigationEaveButton;
