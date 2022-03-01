/**
 *
 * Card
 *
 */

import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TenderosMxBadge from 'components/TenderosMxBadge';

import theme from 'utils/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => {
    switch (props.palette) {
      case 'primary':
        return theme.palette.primary;
      case 'secondary':
        return theme.palette.secondary;
      case 'tertiary':
        return theme.palette.tertiary;
      case 'quaternary':
        return theme.palette.quaternary;
      case 'white':
        return theme.palette.white;
      default:
        return theme.palette.primary;
    }
  }};
  height: ${props => (props.mini ? '99px' : '150px')};
  width: ${props => (props.mini ? '99px' : '150px')};
  margin: ${theme.spacing[2]} ${theme.spacing[1]};
  border-radius: ${props =>
    props.mini ? theme.rounding.rounded : theme.rounding.wedged};
  box-shadow: ${props =>
    props.disabled ? 'none' : `${theme.palette.shadow.white} 1px 4px 10px 3px`};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

  & > img {
    position: relative;
    top: ${props => (props.mini ? '50%' : '40px')};
    transform: translate(0, ${props => (props.mini ? '-50%' : '0')});
  }

  & > p {
    position: relative;
    top: 40px;

    padding-top: ${props => (props.mini ? theme.spacing[3] : null)};
    width: ${props =>
      props.mini ? '150px' : `calc(150px - ${theme.spacing[4]})`};
    color: ${props => {
      if (props.mini) {
        switch (props.palette) {
          case 'primary':
            return theme.palette.primary;
          case 'secondary':
            return theme.palette.secondary;
          case 'tertiary':
            return theme.palette.tertiary;
          case 'quaternary':
            return theme.palette.quaternary;
          default:
            return theme.palette.primary;
        }
      }
      switch (props.palette) {
        case 'white':
          return theme.palette.primary;
        default:
          return theme.palette.white;
      }
  }};
    font-family: ${theme.typeface.default}, sans-serif;
    font-size: ${props => (props.mini ? '16px' : '12px')};
    font-weight: ${props => (props.mini ? '600' : 'bold')};
    text-transform: ${props => (props.mini ? 'none' : 'uppercase')};
    line-height: ${props => (props.mini ? '18px' : null)};
    text-align: center;
  }
`;

function Card({
  secondary,
  tertiary,
  quaternary,
  white,
  disabled,
  icon,
  message,
  onClick,
  disabledOnClick,
  tenderos,
  mini,
}) {
  const cardRef = useRef(0);
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);

  useEffect(() => {
    setTop(cardRef.current ? cardRef.current.offsetTop : 0);
    setLeft(cardRef.current ? cardRef.current.offsetLeft : 0);
  }, [cardRef.current]);

  return (
    <Container
      ref={cardRef}
      palette={(() => {
        if (secondary) return 'secondary';
        if (tertiary) return 'tertiary';
        if (quaternary) return 'quaternary';
        if (white) return 'white';
        return 'primary';
      })()}
      disabled={disabled}
      onClick={disabled ? disabledOnClick : onClick}
      mini={mini}
    >
      {tenderos ? <TenderosMxBadge top={top} left={left} /> : null}
      {icon ? <img src={icon} alt={message} /> : null}
      <br />
      <p>{message}</p>
    </Container>
  );
}

Card.propTypes = {
  /**
   * Whether the secondary color in the palette should be used, as defined in utils/theme.
   */
  secondary: PropTypes.bool,
  /**
   * Whether the tertiary color in the palette should be used, as defined in utils/theme.
   */
  tertiary: PropTypes.bool,
  /**
   * Whether the quaternary color in the palette should be used, as defined in utils/theme.
   */
  quaternary: PropTypes.bool,
  /**
   * Whether the white color in the palette should be used.
   */
  white: PropTypes.bool,
  /**
   * Disables the card.
   */
  disabled: PropTypes.bool,
  /**
   * Path to the icon to be displayed.
   */
  icon: PropTypes.string,
  /**
   * Message to be displayed.
   */
  message: PropTypes.string,
  /**
   * Function to be called when the card is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Function to be called when the card is disabled and clicked.
   */
  disabledOnClick: PropTypes.func,
  /**
   * Whether the tenderos badge should be displayed.
   */
  tenderos: PropTypes.bool,
  /**
   * Whether the card size should be reduced.
   */
  mini: PropTypes.bool,
};

export default Card;
