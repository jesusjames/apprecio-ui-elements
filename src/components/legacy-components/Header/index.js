/**
 *
 * Header
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import theme, { spacingMapping } from '../../utils/theme';

const H1 = styled.h1`
  color: ${props => {
    switch (props.color) {
      case 'white':
        return theme.palette.text.white;
      default:
        return theme.palette.text.primary;
    }
  }};
  font-family: ${theme.typeface.default}, sans-serif;
  font-size: 26px;
  line-height: 31px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};
  width: ${props => (props.mini ? null : theme.width.default)};
  z-index: 20;

  &::first-letter {
    text-transform: capitalize;
  }
`;

const H2 = styled.h2`
  color: ${props => {
    switch (props.color) {
      case 'white':
        return theme.palette.text.white;
      default:
        return theme.palette.text.primary;
    }
  }};
  font-family: ${theme.typeface.default}, sans-serif;
  font-size: 22px;
  line-height: 22px;
  font-weight: bold;
  letter-spacing: -0.22px;
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};
  width: ${theme.width.default};
  z-index: 20;
`;

const H3 = styled.h3`
  color: ${theme.palette.text.tertiary};
  font-family: ${theme.typeface.default}, sans-serif;
  font-size: 14px;
  line-height: 17px;
  font-weight: 300;
  letter-spacing: 0;
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};
  width: ${theme.width.default};
  z-index: 20;

  text-transform: uppercase;
`;

const H4 = styled.h4`
  color: ${props => {
    switch (props.color) {
      case 'yellow':
        return theme.palette.text.link;
      default:
        return theme.palette.text.secondary;
    }
  }};
  font-family: ${theme.typeface.default}, sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: -0.16px;
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};
  width: ${theme.width.default};
  z-index: 20;
`;

const H5 = styled.h5`
  color: ${theme.palette.text.secondary};
  font-family: ${theme.typeface.default}, sans-serif;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  letter-spacing: 0;
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};
  width: ${theme.width.default};
  z-index: 20;
`;

const H6 = styled.h6`
  color: ${theme.palette.text.quaternary};
  font-family: ${theme.typeface.default}, sans-serif;
  font-size: 80px;
  line-height: 97px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};
  width: ${theme.width.default};
  z-index: 20;

  &::first-letter {
    text-transform: capitalize;
  }
`;

const Error = styled.h2`
  color: ${theme.palette.text.primary};
  font-family: ${theme.typeface.default}, sans-serif;
  font-size: 14px;
  line-height: 17px;
  font-weight: bold;
  letter-spacing: 0;
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};
  width: ${theme.width.default};
  z-index: 20;
`;

function Header({
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
  message,
  textAlign,
  variant,
  color,
  mini,
}) {
  switch (variant) {
    case 'h2':
      return (
        <H2
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
            return '0';
          })()}
          marginBottom={(() => {
            if (mb5) return '5';
            if (mb4) return '4';
            if (mb3) return '3';
            if (mb2) return '2';
            if (mb1) return '1';
            return '0';
          })()}
          textAlign={textAlign}
          color={color}
        >
          {message}
        </H2>
      );
    case 'h3':
      return (
        <H3
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
            return '0';
          })()}
          marginBottom={(() => {
            if (mb5) return '5';
            if (mb4) return '4';
            if (mb3) return '3';
            if (mb2) return '2';
            if (mb1) return '1';
            return '0';
          })()}
          textAlign={textAlign}
          color={color}
        >
          {message}
        </H3>
      );
    case 'h4':
      return (
        <H4
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
            return '0';
          })()}
          marginBottom={(() => {
            if (mb5) return '5';
            if (mb4) return '4';
            if (mb3) return '3';
            if (mb2) return '2';
            if (mb1) return '1';
            return '0';
          })()}
          textAlign={textAlign}
          color={color}
        >
          {message}
        </H4>
      );
    case 'h5':
      return (
        <H5
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
            return '0';
          })()}
          marginBottom={(() => {
            if (mb5) return '5';
            if (mb4) return '4';
            if (mb3) return '3';
            if (mb2) return '2';
            if (mb1) return '1';
            return '0';
          })()}
          textAlign={textAlign}
          color={color}
        >
          {message}
        </H5>
      );
    case 'h6':
      return (
        <H6
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
            return '0';
          })()}
          marginBottom={(() => {
            if (mb5) return '5';
            if (mb4) return '4';
            if (mb3) return '3';
            if (mb2) return '2';
            if (mb1) return '1';
            return '0';
          })()}
          textAlign={textAlign}
          color={color}
        >
          {message}
        </H6>
      );
    case 'error':
      return (
        <Error
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
            return '0';
          })()}
          marginBottom={(() => {
            if (mb5) return '5';
            if (mb4) return '4';
            if (mb3) return '3';
            if (mb2) return '2';
            if (mb1) return '1';
            return '0';
          })()}
          textAlign={textAlign}
          color={color}
        >
          {message}
        </Error>
      );
    default:
      return (
        <H1
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
            return '0';
          })()}
          marginBottom={(() => {
            if (mb5) return '5';
            if (mb4) return '4';
            if (mb3) return '3';
            if (mb2) return '2';
            if (mb1) return '1';
            return '0';
          })()}
          textAlign={textAlign}
          color={color}
          mini={mini || false}
        >
          {message}
        </H1>
      );
  }
}

Header.propTypes = {
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
   * The message to be shown.
   */
  message: PropTypes.string,
  /**
   * Alignment of the text.
   */
  textAlign: PropTypes.string,
  /**
   * The different variants of the component.
   */
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'error']),
  /**
   * The color of the text.
   */
  color: PropTypes.oneOf(['white', 'yellow']),
  /**
   * Reduces the width of the text.
   */
  mini: PropTypes.bool,
};

export default Header;
