/**
 *
 * HalfDrawer
 *
 */

import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import theme from 'utils/theme';

const StyledContainer = styled.div`
  background-color: ${props => {
    switch (props.variant) {
      case 'primary':
        return theme.palette.primary;
      case 'secondary':
        return theme.palette.secondary;
      case 'tertiary':
        return theme.palette.tertiary;
      case 'quaternary':
        return theme.palette.quaternary;
      case 'quinary':
        return theme.palette.quinary;
      case 'offWhite':
        return theme.palette.background.offWhite;
      default:
        return theme.palette.background.offWhite;
    }
  }};
  box-shadow: 0px -3px 20px ${theme.palette.shadow.white};

  height: 0px;
  width: 100%;
  position: absolute;
  bottom: 0;

  overflow-y: hidden;

  border-top-left-radius: ${theme.rounding.rounded};
  border-top-right-radius: ${theme.rounding.rounded};

  /* transition-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transition-duration: 0.2s; */

  z-index: ${props => props.zIndex};

  & > .handle {
    width: 70px;
    height: 3px;
    background-color: ${props =>
      props.variant === 'offWhite'
        ? theme.palette.disabled
        : theme.palette.background.offWhite};

    position: relative;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);

    border-radius: ${theme.rounding.circled};
    border: 12px solid
      ${props => {
        switch (props.variant) {
          case 'primary':
            return theme.palette.primary;
          case 'secondary':
            return theme.palette.secondary;
          case 'tertiary':
            return theme.palette.tertiary;
          case 'quaternary':
            return theme.palette.quaternary;
          case 'quinary':
            return theme.palette.quinary;
          case 'offWhite':
            return theme.palette.background.offWhite;
          default:
            return theme.palette.background.offWhite;
        }
      }};
    box-sizing: content-box;
  }

  .content-container {
    width: 100%;
    height: 100%;

    padding: ${theme.spacing[2]} ${theme.spacing[4]};
  }
`;

function HalfDrawer({
  defaultHeight,
  show,
  setShow,
  variant = 'offWhite',
  zIndex,
  children,
  triggerOnMovement,
}) {
  const [initialY, setInitialY] = useState(0);
  const [initialHeight, setInitialHeight] = useState(0);
  const [height, setHeight] = useState();
  const [displayAnimations, setDisplayAnimations] = useState(true);

  const container = useRef(null);

  useEffect(() => {
    if (show) {
      setHeight(defaultHeight);
    } else {
      setHeight(0);
    }
  }, [show]);

  useEffect(() => {
    container.current.style.height = `${height}px`;
  }, [height]);

  useEffect(() => {
    if (displayAnimations) {
      container.current.style.transition = 'height 0.35s ease-in-out';
    } else {
      container.current.style.transition = 'none';
    }
  }, [displayAnimations]);

  return (
    <StyledContainer
      ref={container}
      onTouchEnd={() => {
        setDisplayAnimations(true);
        if (height > (defaultHeight * 3) / 4) {
          setHeight(defaultHeight);
        } else {
          setShow(false);
          setHeight(0);
        }
      }}
      variant={variant}
      zIndex={zIndex}
    >
      <button
        className="handle"
        type="button"
        onTouchStart={e => {
          setDisplayAnimations(false);
          setInitialY(e.touches[0].clientY);
          setInitialHeight(height);
        }}
        onTouchMove={e => {
          setHeight(initialHeight + initialY - e.touches[0].clientY);
          if (height > defaultHeight + 100) {
            triggerOnMovement();
          }
        }}
        onClick={() => triggerOnMovement()}
      />
      <div className="content-container">{children}</div>
    </StyledContainer>
  );
}

HalfDrawer.propTypes = {
  /**
   * The hieght drawer is going to be shown when inactive.
   */
  defaultHeight: PropTypes.number,
  /**
   * Whether the drawer is active or not.
   */
  show: PropTypes.bool,
  /**
   * Callback to set show state.
   */
  setShow: PropTypes.func,
  /**
   * Defines the color of the drawer.
   */
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'quinary',
    'offWhite',
  ]),
  /**
   * Used to set the z-index value of the drawer. Useful when multiple drawers are used.
   */
  zIndex: PropTypes.number,
  /**
   * The content of the drawer.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * Callback to trigger when the drawer is moved.
   */
  triggerOnMovement: PropTypes.func,
};

export default HalfDrawer;
