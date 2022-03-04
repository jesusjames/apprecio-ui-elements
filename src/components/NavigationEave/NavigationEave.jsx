/**
 *
 * NavigationEave
 *
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BackArrow from 'components/BackArrow';

const StyledContainer = styled.div`
  background-color: ${(props) => {
    switch (props.variart) {
      case 'primary':
        return theme.palette.primary;
      case 'offWhite':
        return theme.palette.background.offWhite;
      case 'transparent':
        return 'transparent';
      default:
        return theme.palette.background.offWhite;
    }
  }};
  box-shadow: ${(props) => {
    if (props.mode === 'scanner') {
      return 'none';
    }
    return `0px 3px 20px ${theme.palette.shadow.white}`;
  }};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: ${(props) => (props.shortened ? '50px' : '150px')};

  transition: height 0.2s ease-in-out;

  overflow-y: hidden;

  border-bottom-left-radius: ${theme.rounding.rounded};
  border-bottom-right-radius: ${theme.rounding.rounded};

  position: absolute;
  top: 0;

  z-index: 30;

  .logo {
    margin-top: ${(props) => (props.shortened ? '12px' : '0')};
    width: 25px;
    height: 25px;
  }

  .slider {
    background-color: ${theme.palette.primary};

    width: 60px;
    height: 35px;

    border-radius: ${theme.rounding.wedged};

    position: absolute;
    left: calc((100% - ${theme.width.default}) / 2);
    top: 78px;

    z-index: 10;

    transition-timing-function: cubic-bezier(0.73, 0.25, 0.44, 1.21);
    transition-duration: 0.2s;
  }

  .children-bar {
    width: ${theme.width.default};
    height: ${(props) => (props.shortened ? '0px' : '60px')};

    transition: height 0.2s ease-in-out;

    overflow-y: hidden;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

const NavigationEave = ({
  variant = 'offWhite',
  icon,
  name,
  children,
  goBackFunction,
  mode,
  page,
  shortened = false,
}) => {
  const slider = useRef(null);

  const noc = React.Children.count(children);
  const itemWidth = 60;
  const spaceWidth = (325 - itemWidth * noc) / noc;

  useEffect(() => {
    slider.current.style.left = `calc((100% - ${
      theme.width.default
    }) / 2 + ${spaceWidth / 2}px + ${page * (itemWidth + spaceWidth)}px)`;
  }, [page]);

  return (
    <StyledContainer variart={variant} mode={mode} shortened={shortened}>
      <BackArrow
        white={variant === 'primary' || mode === 'scanner'}
        onClick={goBackFunction}
      />
      <img className="logo" src={icon} alt={name} />
      <div ref={slider} className="slider" />
      <div className="children-bar">{children}</div>
    </StyledContainer>
  );
};

NavigationEave.propTypes = {
  /**
   * The color used in the Navigation Eave.
   */
  variant: PropTypes.oneOf(['primary', 'offWhite', 'transparent']),
  /**
   * The icon used in the Navigation Eave.
   */
  icon: PropTypes.string,
  /**
   * Name shown when the icon could not be displayed.
   */
  name: PropTypes.string,
  /**
   * Children nodes
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * Function triggered when the back button is clicked.
   */
  goBackFunction: PropTypes.func,
  mode: PropTypes.string.isRequired,
  page: PropTypes.number,
  shortened: PropTypes.bool,
};

export default NavigationEave;
