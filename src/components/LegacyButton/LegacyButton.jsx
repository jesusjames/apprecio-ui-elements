/**
 *
 * LegacyButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { LegacyButtonStyled } from './style';

import Facebook from '../image/facebook.png';
import WhiteArrowRight from '../image/ArrowRightWhite.svg';

function LegacyButton({
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
    <LegacyButtonStyled
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
    </LegacyButtonStyled>
  );
}

LegacyButton.propTypes = {
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

export default LegacyButton;
