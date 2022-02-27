/**
 *
 * CustomIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from '../../utils/theme';

const ContainerImg = styled.img`
  left: ${props => (props.right ? 'auto' : 0)};
  right: ${props => (props.right ? 0 : 'auto')};
  top: 0;
  cursor: pointer;
  margin-top: ${theme.spacing[4]};
  margin-left: ${theme.spacing[4]};
  margin-right: ${theme.spacing[4]};
  position: absolute;
  z-index: 20;
  height: 20px;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

const ContainerDiv = styled.div`
  z-index: 20;
  background-color: #fe9920;
  border-radius: ${theme.rounding.rounded};
  display: flex;
  align-items: center;
  position: fixed;
  left: ${props => (props.right ? 'auto' : 0)};
  right: ${props => (props.right ? 0 : 'auto')};
  top: 0;
  cursor: pointer;
  margin-top: ${theme.spacing[3]};
  margin-left: ${theme.spacing[3]};
  margin-right: ${theme.spacing[3]};
  padding: ${theme.spacing[2]};

  & > img {
    height: 16px;
  }

  & > p {
    margin: 0;
    color: ${theme.palette.white};
    font-family: ${theme.typeface.default};
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
  }
`;

function CustomIcon({ right, onClick, icon, label }) {
  if (label)
    return (
      <ContainerDiv right={right} onClick={onClick}>
        <p>{label}</p>
        <img src={icon} alt="" />
      </ContainerDiv>
    );
  return <ContainerImg right={right} src={icon} alt="" onClick={onClick} />;
}

CustomIcon.propTypes = {
  /**
   * Displays the in the top right corner.
   */
  right: PropTypes.bool,
  /**
   * Callback fucntion that's called when the icon is clicked.
   */
  onClick: PropTypes.func,
  /**
   * The icon to display.
   */
  icon: PropTypes.any.isRequired,
  /**
   * The text label in case the icon cannot be displayed.
   */
  label: PropTypes.string,
};

export default CustomIcon;
