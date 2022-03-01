/**
 *
 * Drawer
 *
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';
import YellowArrow from 'images/YellowArrowRight.svg';
import RedArrow from 'images/RedArrowRight.svg';

const DrawerContainer = styled.div`
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;

  min-height: ${props => (props.showOn ? '100vh' : '0px')};
  min-width: ${props => (props.showOn ? '100vw' : '0px')};
  height: ${props => (props.showOn ? '100%' : '0px')};
  width: ${props => (props.showOn ? '100%' : '0px')};

  z-index: ${props => (props.showOn ? 30 : -10)};
  transition-duration: ${props => (props.showOn ? '0s' : '0.5s')};
  transition-timing-function: cubic-bezier(1, 0.04, 1, -0.26);

  & > .drawerContent {
    width: 100%;
    height: ${props => (props.showOn ? '85vh' : '0vh')};
    background-color: ${theme.palette.background.offWhite};
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);

    position: fixed;
    bottom: 0;
    z-index: 30;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    & > .closeButton {
      padding: 0;
      margin: ${theme.spacing[3]} ${theme.spacing[4]};
      background-color: transparent;
      border: none;
      cursor: pointer;

      & > * {
        display: inline;
      }

      & > img {
        transform: rotate(180deg);
      }

      & > p {
        color: ${props =>
    props.variant === 'primary'
      ? theme.palette.primary
      : theme.palette.quinary};
        font: normal normal 500 17px/17px ${theme.typeface.default}, sans-serif;
        letter-spacing: -0.17px;
      }
    }

    & > .childrenContainer {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

function Drawer({ showOn, showSetter, children, variant = 'quinary' }) {
  const drawerRef = useRef(null);

  // Triggers a redraw on iOS, necessary for blur effect to work
  useEffect(() => {
    drawerRef.current.style.display = 'table';
    drawerRef.current.offsetHeight;
    drawerRef.current.style.display = 'block';
  }, [showOn]);

  return (
    <DrawerContainer
      ref={drawerRef}
      showOn={showOn}
      onClick={e => {
        if (e.target === drawerRef.current) {
          showSetter(false);
        }
      }}
      variant={variant}
    >
      <div className="drawerContent">
        <button
          className="closeButton"
          type="button"
          onClick={() => showSetter(false)}
        >
          <img src={variant === 'primary' ? RedArrow : YellowArrow} alt="<" />
          <p>Volver</p>
        </button>
        <div className="childrenContainer">{children}</div>
      </div>
    </DrawerContainer>
  );
}

Drawer.propTypes = {
  /**
   * Whether the drawer is visible or not.
   */
  showOn: PropTypes.bool.isRequired,
  /**
   * Function to set the visibility of the drawer.
   */
  showSetter: PropTypes.func.isRequired,
  /**
   * The children of the drawer.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * The color of the drawer.
   */
  variant: PropTypes.oneOf(['primary', 'quinary']),
};

export default Drawer;
