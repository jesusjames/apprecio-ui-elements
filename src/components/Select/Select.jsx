import React, { useState, useEffect } from 'react';
import { isEmpty, isNil, path } from 'ramda';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { RcSelectStyled, SelectWrapper } from './components/styles';
import './assets/select.global.css';

const hasValidValue = (value) => !isEmpty(value) && !isNil(value);

const ArrowDownIcon = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  background: transparent;
  border-top: 2px solid ${(props) => path(['input', props?.color, 'mainColor'], props.theme)};
  border-left: 2px solid ${(props) => path(['input', props?.color, 'mainColor'], props.theme)};
  text-decoration: none;
  color: transparent;
  transform: rotate(-135deg);
  margin-top: -8px;
`;

const Select = ({
  children, value, onChange, onBlur, defaultValue,
  disabled, error, className, color, icon,
  borderSize, placeholder, name, ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  // eslint-disable-next-line no-shadow
  const localOnChange = (value, options) => { onChange(value, options); };

  useEffect(() => {
    setHasValue(hasValidValue(value) || hasValidValue(defaultValue));
  }, [value, defaultValue]);

  return (
    <SelectWrapper
      isFocused={isFocused}
      hasValue={hasValue}
      disabled={disabled}
      error={error}
      className={className}
      color={color}
    >
      <RcSelectStyled
        bordersize={borderSize}
        inputIcon={<ArrowDownIcon color={color} />}
        onFocus={() => { setIsFocused(true); }}
        onBlur={() => { setIsFocused(false); onBlur(); }}
        getPopupContainer={(trigger) => trigger.parentNode}
        value={value}
        onChange={localOnChange}
        defaultValue={defaultValue}
        disabled={disabled}
        error={error}
        name={name}
        color={color}
        icon={icon}
        {...restProps}
      >
        { children }
      </RcSelectStyled>
      { icon && <span className="select-icon"><ReactSVG src={icon} /></span>}
      { (placeholder && !hasValue) && <span data-testid="placeholder-id" className="rc-select-selection-placeholder">{placeholder}</span> }
      { error && <span className="select-error-message">{ error }</span>}
    </SelectWrapper>
  );
};

Select.defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  color: 'primary',
  error: '',
  icon: '',
};

Select.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  /** error message or component */
  // eslint-disable-next-line react/forbid-prop-types
  error: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  placeholder: PropTypes.string,
  borderSize: PropTypes.string,
  /** import svg path icon */
  icon: PropTypes.string,
};

export { default as Option } from './components/Option';
export default Select;
