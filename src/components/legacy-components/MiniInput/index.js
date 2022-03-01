/**
 *
 * MiniInput
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import theme, { spacingMapping } from '../../utils/theme';

const Container = styled.input`
  background-color: ${theme.palette.background.gray};
  border-radius: ${theme.rounding.wedged};
  border-style: none;
  margin: ${props => spacingMapping(props.margin)};
  margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
  margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};
  margin-right: ${props =>
    props.marginRight
      ? spacingMapping(props.marginRight)
      : spacingMapping(props.margin)};
  padding: ${theme.spacing[3]}};
  height: ${props => (props.variant === 'big' ? '70px' : 'auto')};
  width: ${props => (props.variant === 'big' ? '70px' : '60px')};
  font-family: ${theme.typeface.default}, sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 14px;

  &::placeholder {
    color: ${theme.palette.text.onOffWhite};
    font-family: ${theme.typeface.default}, sans-serif;
    font-weight: 600;
    letter-spacing: -0.14px;
  }
`;

function MiniInput({
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
  mr1,
  mr2,
  mr3,
  mr4,
  mr5,
  placeholder,
  onChange,
  inputRef,
  variant,
  maxLength,
  type,
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
      marginRight={(() => {
        if (mr5) return '5';
        if (mr4) return '4';
        if (mr3) return '3';
        if (mr2) return '2';
        if (mr1) return '1';
        return null;
      })()}
      maxLength={maxLength || 1}
      type={type || 'text'}
      placeholder={placeholder}
      onChange={onChange}
      ref={inputRef}
      variant={variant}
    />
  );
}

MiniInput.propTypes = {
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
   * Whether the bottom margin of the component should be of 1 unit, as specified in utils/theme.js. Overrides any m#.
   */
  mr1: PropTypes.bool,
  /**
   * Whether the bottom margin of the component should be of 2 units, as specified in utils/theme.js. Overrides mr1.
   */
  mr2: PropTypes.bool,
  /**
   * Whether the bottom margin of the component should be of 3 units, as specified in utils/theme.js. Overrides mr2.
   */
  mr3: PropTypes.bool,
  /**
   * Whether the bottom margin of the component should be of 4 units, as specified in utils/theme.js. Overrides mr3.
   */
  mr4: PropTypes.bool,
  /**
   * Whether the bottom margin of the component should be of 5 units, as specified in utils/theme.js.
   */
  mr5: PropTypes.bool,
  /**
   * The placeholder text of the input.
   */
  placeholder: PropTypes.string,
  /**
   * The function to be called when the input changes.
   */
  onChange: PropTypes.func,
  /**
   * The ref hook to the input.
   */
  inputRef: PropTypes.any,
  /**
   * The variant of the input.
   */
  variant: PropTypes.oneOf(['big']),
  /**
   * The max length of the input.
   */
  maxLength: PropTypes.number,
  /**
   * The type of the input.
   */
  type: PropTypes.string,
};

export default MiniInput;
