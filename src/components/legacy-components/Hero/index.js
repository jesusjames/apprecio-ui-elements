/**
 *
 * Hero
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';

import theme from '../../utils/theme';

const HeroContainer = styled.div`
  background-color: ${theme.palette.primary};
  background-image: url(${props => props.src});
  background-size: 100vw;
  background-position: 0px 0px;
  position: relative;
  width: 100%;
  height: 181px;
  border-bottom-right-radius: 50%;
  margin-bottom: 40px;
  box-shadow: 1px 4px 0 ${darken(0.2, theme.palette.primary)};

  & > div {
    background-color: ${theme.palette.primary}50;
    border-bottom-right-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & > div > button {
    position: absolute;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;

    right: ${theme.spacing[3]};
    top: 90px;

    & > p {
      color: ${theme.palette.text.white};
      font-family: ${theme.typeface.default}, sans-serif;
      font-size: 22px;
      font-weight: bold;
      letter-spacing: -0.22px;
      line-height: 22px;
      margin: 0;
    }
  }

  &::before {
    background-color: ${theme.palette.primary};
    background-image: url(${props => props.src});
    background-size: 100vw;
    background-position: 0px -181px;
    content: '';
    position: absolute;
    top: 180px;
    width: 90px;
    height: 60px;
    box-shadow: inset 60px 90px 0 ${theme.palette.primary}50;
  }

  &::after {
    background-color: ${theme.palette.background.offWhite};
    box-shadow: inset 1px 4px 0 ${darken(0.2, theme.palette.primary)};
    content: '';
    position: absolute;
    top: 181px;
    width: 91px;
    height: 61px;
    border-top-left-radius: 90%;
  }
`;

function Hero({ children, src }) {
  return (
    <HeroContainer src={src}>
      <div>{children}</div>
    </HeroContainer>
  );
}

Hero.propTypes = {
  /**
   * The children components.
   */
  children: PropTypes.any,
  /**
   * Route to the background image.
   */
  src: PropTypes.string,
};

export default Hero;
