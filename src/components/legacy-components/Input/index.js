/**
 *
 * Input
 *
 */

import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RequiresVerificationAlert from 'components/RequiresVerificationAlert';

import theme, { spacingMapping } from 'utils/theme';

import DateInput from 'components/DateInput';

const MainInput = styled.input`
  -webkit-appearance: none;
  height: 48px;
  background-color: ${props => {
    switch (props.variant) {
      case 'transparent':
        return 'transparent';
      default:
        return theme.palette.background.gray;
    }
  }};
  border-radius: ${theme.rounding.wedged};
  border-style: ${props => {
    switch (props.variant) {
      case 'transparent':
        return 'solid';
      default:
        return 'none';
    }
  }};
  color: ${props => {
    switch (props.variant) {
      case 'transparent':
        return theme.palette.white;
      default:
        return theme.palette.black;
    }
  }};
  font-size: ${props => {
    switch (props.variant) {
      case 'transparent':
        return '26px';
      default:
        return '14px';
    }
  }};
  font-weight: ${props => {
    switch (props.variant) {
      case 'transparent':
        return '600 !important';
      default:
        return '500';
    }
  }};
  text-align: ${props => {
    switch (props.variant) {
      case 'transparent':
        return 'center';
      default:
        return 'left';
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
  padding: ${props => {
    switch (props.variant) {
      case 'transparent':
        return `${theme.spacing[2]} ${theme.spacing[4]}`;
      default:
        return `${theme.spacing[3]} ${theme.spacing[4]}`;
    }
  }};
  width: ${props => {
    switch (props.variant) {
      case 'rowed':
        return 'calc(315px - 60px - .75rem)';
      default:
        return '315px';
    }
  }};
  font-family: ${theme.typeface.default}, sans-serif;
  font-weight: 500;

  &::placeholder {
    color: ${theme.palette.text.onOffWhite};
    font-family: ${theme.typeface.default}, sans-serif;
    font-weight: 600;
    letter-spacing: -0.14px;
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

const MainDiv = styled.div`
  &.white {
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

    & > input {
      background-color: ${theme.palette.background.white};
      border-radius: ${theme.rounding.wedged};
      border-style: solid;
      border-color: ${theme.palette.border.dark};
      border-width: 1px;
      padding: ${theme.spacing[3]} ${theme.spacing[4]};
      width: ${theme.width.default};
      font-family: ${theme.typeface.default}, sans-serif;
      font-weight: 500;
      margin-top: ${theme.spacing[2]};
    }

    & > label {
      color: ${theme.palette.text.secondary};
      font-family: ${theme.typeface.default}, sans-serif;
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0;
    }
  }

  &.requiresVerification > input {
    background-color: ${theme.palette.background.gray};
    border-radius: ${theme.rounding.wedged};
    border-style: none;
    color: ${theme.palette.black};
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    margin: ${props => spacingMapping(props.margin)};
    margin-top: ${props =>
    props.marginTop
      ? spacingMapping(props.marginTop)
      : spacingMapping(props.margin)};
    margin-bottom: ${props =>
    props.marginBottom
      ? spacingMapping(props.marginBottom)
      : spacingMapping(props.margin)};
    padding: ${theme.spacing[3]} ${theme.spacing[4]};
    width: 315px;
    font-family: ${theme.typeface.default}, sans-serif;
    font-weight: 500;

    &::placeholder {
      color: ${theme.palette.text.onOffWhite};
      font-family: ${theme.typeface.default}, sans-serif;
      font-weight: 600;
      letter-spacing: -0.14px;
    }

    &:focus {
      outline: none;
    }
  }
`;

function Input({
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
  placeholder,
  label,
  form,
  type,
  value,
  variant,
  verified,
  onChange,
  onKeyPress,
  onClickAlert,
}) {
  const verificationRef = useRef(null);
  const This = useRef(null);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(verificationRef.current ? verificationRef.current.offsetTop : 0);
  }, [verificationRef.current]);

  if (type === 'date') {
    return (
      <DateInput
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
        placeholder={placeholder}
        form={form}
        onChange={onChange}
        onKeyPress={onKeyPress}
        type={type}
        value={value}
        variant={variant}
      />
    );
  }

  switch (variant) {
    case 'requiresVerification':
      return (
        <MainDiv
          className="requiresVerification"
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
        >
          <RequiresVerificationAlert
            hasValue={!!value}
            isVerified={verified}
            top={top}
            onClick={onClickAlert}
          />
          <input
            ref={verificationRef}
            placeholder={placeholder}
            form={form}
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={value}
            variant={variant}
          />
        </MainDiv>
      );
    case 'white':
      return (
        <MainDiv
          className="white"
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
        >
          <label>{label}</label>
          <input
            form={form}
            onChange={onChange}
            onKeyPress={onKeyPress}
            value={value}
          />
        </MainDiv>
      );
    default:
      return (
        <MainInput
          ref={This}
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
          placeholder={placeholder}
          form={form}
          onChange={onChange}
          onKeyPress={onKeyPress}
          type={type}
          value={value}
          variant={variant}
        />
      );
  }
}

Input.propTypes = {
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
   * The placeholder of the input.
   */
  placeholder: PropTypes.string,
  /**
   * Label to be shown on top of the input.
   */
  label: PropTypes.string,
  /**
   * Form which the input belongs to.
   */
  form: PropTypes.string,
  /**
   * The type of the input.
   */
  type: PropTypes.string,
  /**
   * The value of the input.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The different styles of the input.
   */
  variant: PropTypes.oneOf([
    'transparent',
    'rowed',
    'requiresVerification',
    'white',
  ]),
  /**
   * Whether an unverified badge is shown next to the input.
   */
  verified: PropTypes.bool,
  /**
   * Function used to manipulate the value of the input.
   */
  onChange: PropTypes.func,
  /**
   * Function used to manipulate the value of the input when a key is pressed.
   */
  onKeyPress: PropTypes.func,
  /**
   * Triggers an action when the unverified badge is clicked.
   */
  onClickAlert: PropTypes.func,
};

export default Input;
