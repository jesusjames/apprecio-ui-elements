/**
 *
 * Message
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import theme, { spacingMapping } from '../../utils/theme';

const Container = styled.p`
  display: inline;
  color: ${props => {
    switch (props.variant) {
      case 'yellow':
        return theme.palette.text.link;
      case 'tertiary':
        return theme.palette.text.tertiary;
      case 'smallRed':
        return theme.palette.text.primary;
      default:
        return theme.palette.text.secondary;
    }
  }};
  font-family: ${theme.typeface.default}, sans-serif;
  font-weight: 500;
  font-size: ${props => {
    switch (props.variant) {
      case 'smallRed':
        return '13px';
      default:
        return '13px';
    }
  }};
  line-height: ${props => {
    switch (props.variant) {
      case 'smallRed':
        return '20px';
      default:
        return '20px';
    }
  }};
  letter-spacing: ${props => {
    switch (props.variant) {
      case 'smallRed':
        return '-0.13px';
      default:
        return '-0.33px';
    }
  }};
  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};
  padding: 0;
  text-align: ${props => props.textAlign};
  text-transform: ${props => props.textTransform};
  width: ${props => (props.fullWidth ? '100%' : theme.width.default)};
  z-index: 10;
`;

function Message({
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
  children,
  secondary,
  textAlign,
  textTransform,
  variant,
  fullWidth,
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
      secondary={secondary}
      textAlign={textAlign || 'center'}
      textTransform={textTransform || 'none'}
      variant={variant}
      fullWidth={fullWidth}
    >
      {children}
    </Container>
  );
}

Message.propTypes = {
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
   * The children components to be rendered.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  /**
   * Whether the secondary color of the palette should be used.
   */
  secondary: PropTypes.bool,
  /**
   * The alignment of the text in the component.
   */
  textAlign: PropTypes.string,
  /**
   * Transformation applied to the text in the component.
   */
  textTransform: PropTypes.string,
  /**
   * Style variations of the component.
   */
  variant: PropTypes.oneOf(['yellow', 'tertiary', 'smallRed']),
  /**
   * Whether the width of the component should be 100% of the parent.
   */
  fullWidth: PropTypes.bool,
};

export default Message;
