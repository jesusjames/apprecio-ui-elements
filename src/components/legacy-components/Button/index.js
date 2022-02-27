/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import theme, { roundingMapping, spacingMapping } from 'utils/theme';
import Facebook from 'images/facebook.png';
import WhiteArrowRight from 'images/WhiteArrowRight.svg';

const Container = styled.button`
  background-color: ${props => {
    if (props.disabled) {
      return theme.palette.disabled;
    }
    switch (props.variant) {
      case 'facebook':
        return 'transparent';
      case 'transparent':
        return 'transparent';
      case 'primary':
        return theme.palette.primary;
      case 'quinary':
        return theme.palette.quinary;
      default:
        return theme.palette.primary;
    }
  }};
  border-color: ${props => {
    if (props.disabled) {
      return theme.palette.disabled;
    }
    switch (props.variant) {
      case 'facebook':
        return theme.palette.facebook;
      case 'transparent':
        return 'transparent';
      case 'primary':
        return theme.palette.primary;
      case 'quinary':
        return theme.palette.quinary;
      default:
        return theme.palette.primary;
    }
  }};
  border-radius: ${props => roundingMapping(props.rounding)};
  border-style: solid;
  border-width: 2px;
  color: ${props => {
    switch (props.variant) {
      case 'facebook':
        return theme.palette.facebook;
      case 'transparent':
        if (props.mini) {
          return theme.palette.text.secondary;
        }
        return theme.palette.text.primary;
      default:
        return theme.palette.text.white;
    }
  }};
  font-family: ${theme.typeface.default}, sans-serif;
  font-size: 14px;
  font-weight: ${props => {
    switch (props.variant) {
      case 'facebook':
        return 600;
      default:
        return 700;
    }
  }};
  line-height: 21px;
  letter-spacing: -0.14px;
  text-transform: ${props => (props.mini ? 'none' : 'uppercase')};
  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};
  padding: ${props => spacingMapping(props.padding)};
  width: ${theme.width.default};
  z-index: 20;

  opacity: ${props => (props.disabled ? 0.5 : 1)};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }

  & > img.fb {
    margin-right: ${theme.spacing[2]};
  }

  & > img.arrow {
    position: fixed;
    transform: translate(60px, -10px);
  }
`;

function Button({
  wedged,
  noRounding,
  borderless,
  message,
  onClick,
  disabled,
  mini,
  variant,
  enter,
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
  p1,
  p2,
  p3,
  p4,
  p5,
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
      padding={(() => {
        if (p5) return '5';
        if (p4) return '4';
        if (p3) return '3';
        if (p2) return '2';
        if (p1) return '1';
        return '0';
      })()}
      rounding={(() => {
        if (wedged) return 'wedged';
        if (noRounding) return 'none';
        return 'rounded';
      })()}
      borderless={borderless}
      onClick={onClick}
      disabled={disabled || false}
      mini={mini || false}
      className={disabled ? 'diabled' : ''}
      variant={variant}
    >
      {variant === 'facebook' ? (
        <img className="fb" src={Facebook} alt="fb" height="33" />
      ) : null}
      {message}
      {enter === 'enter' ? (
        <img className="arrow" src={WhiteArrowRight} alt=">" height="40" />
      ) : null}
    </Container>
  );
}

Button.propTypes = {
  /**
   * By default, component is rounded. This attribute makes the button rectangular.
   */
  noRounding: PropTypes.bool,
  /**
   * Softens the button rounding by making it wedged.
   */
  wedged: PropTypes.bool,
  /**
   * Removes the border from the button.
   */
  borderless: PropTypes.bool,
  /**
   * The string of text that will be displayed on the button.
   */
  message: PropTypes.string,
  /**
   * The function that will be called when the button is clicked on.
   */
  onClick: PropTypes.func,
  /**
   * Disables the button on true-
   */
  disabled: PropTypes.bool,
  /**
   * Whether the button should be rendered smaller than normal.
   */
  mini: PropTypes.bool,
  /**
   * Shows variations of the button:
   *
   * facebook: makes the button blue and adds the Facebook logo.
   *
   * transparent: makes the button transparent.
   *
   * primary: uses the primary color as background for the button, as defined in utils/theme.
   *
   * quinary: uses the quinary color as background for the button, as defined in utils/theme.
   */
  variant: PropTypes.oneOf(['facebook', 'transparent', 'primary', 'quinary']),
  /**
   * Whether it shows a little white arrow on the right side of the button.
   */
  enter: PropTypes.string,
  /**
   * Whether the margin of the component should be of 1 unit, as specified in utils/theme.js. Has the lowest priority overall.
   */
  m1: PropTypes.bool,
  /**
   * Whether the margin of the component should be of 2 units, as specified in utils/theme.js. Overrides m1.
   */
  m2: PropTypes.bool,
  /**
   * Whether the margin of the component should be of 3 units, as specified in utils/theme.js. Overrides m2.
   */
  m3: PropTypes.bool,
  /**
   * Whether the margin of the component should be of 4 units, as specified in utils/theme.js. Overrides m3.
   */
  m4: PropTypes.bool,
  /**
   * Whether the margin of the component should be of 5 units, as specified in utils/theme.js. Overrides m4.
   */
  m5: PropTypes.bool,
  /**
   * Whether the top margin of the component should be of 1 unit, as specified in utils/theme.js. Overrides any m#.
   */
  mt1: PropTypes.bool,
  /**
   * Whether the top margin of the component should be of 2 units, as specified in utils/theme.js. Overrides mt1.
   */
  mt2: PropTypes.bool,
  /**
   * Whether the top margin of the component should be of 3 units, as specified in utils/theme.js. Overrides mt2.
   */
  mt3: PropTypes.bool,
  /**
   * Whether the top margin of the component should be of 4 units, as specified in utils/theme.js. Overrides mt3.
   */
  mt4: PropTypes.bool,
  /**
   * Whether the top margin of the component should be of 5 units, as specified in utils/theme.js. Alongside mb5 has the highest priority overall.
   */
  mt5: PropTypes.bool,
  /**
   * Whether the bottom margin of the component should be of 1 unit, as specified in utils/theme.js. Overrides any m#.
   */
  mb1: PropTypes.bool,
  /**
   * Whether the bottom margin of the component should be of 2 units, as specified in utils/theme.js. Overrides mb1.
   */
  mb2: PropTypes.bool,
  /**
   * Whether the bottom margin of the component should be of 3 units, as specified in utils/theme.js. Overrides mb2.
   */
  mb3: PropTypes.bool,
  /**
   * Whether the bottom margin of the component should be of 4 units, as specified in utils/theme.js. Overrides mb3.
   */
  mb4: PropTypes.bool,
  /**
   * Whether the bottom margin of the component should be of 5 units, as specified in utils/theme.js. Alongside mt5 has the highest priority overall.
   */
  mb5: PropTypes.bool,
  /**
   * Whether the margin of the component should be of 1 unit, as specified in utils/theme.js. Has the lowest priority overall.
   */
  p1: PropTypes.bool,
  /**
   * Whether the margin of the component should be of 2 units, as specified in utils/theme.js. Overrides p1.
   */
  p2: PropTypes.bool,
  /**
   * Whether the margin of the component should be of 3 units, as specified in utils/theme.js. Overrides p2.
   */
  p3: PropTypes.bool,
  /**
   * Whether the margin of the component should be of 4 units, as specified in utils/theme.js. Overrides p3.
   */
  p4: PropTypes.bool,
  /**
   * Whether the margin of the component should be of 5 units, as specified in utils/theme.js. Overrides p4.
   */
  p5: PropTypes.bool,
};

export default Button;
