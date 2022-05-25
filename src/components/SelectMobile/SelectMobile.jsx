import PropTypes from 'prop-types';
import {
  forwardRef,
  memo, useEffect, useRef, useState,
} from 'react';
import { isEmpty, map } from 'ramda';
import { Option } from '../Select/Select';

import MexicoSVG from './assets/images/mexico.svg';
import ColombiaSVG from './assets/images/colombia.svg';
import EcuadorSVG from './assets/images/ecuador.svg';
import PeruSVG from './assets/images/peru.svg';
import {
  InputContainer, InputStyled, ReactSVGStyled, SelectMobileStyled, SelectStyled,
} from './styles';

// eslint-disable-next-line react/display-name
const SelectMobile = forwardRef(({
  countriesCodes, countryCodeDefaultValue, color, onChange, value, error,
  placeholder, ...rest
}, ref) => {
  const parentElement = useRef();
  const [countryCode, setCountryCode] = useState(countryCodeDefaultValue);
  const [widthDropdown, setWidthDropdown] = useState(0);

  useEffect(() => {
    setWidthDropdown(parentElement?.current?.offsetWidth);
  }, [parentElement?.current]);

  const handleOnChangeSelect = (val) => {
    setCountryCode(val);
  };

  const handleChangeMobile = (e) => {
    const regExp = /^[0-9\b]+$/;
    if (e.target.value === '' || regExp.test(e.target.value)) {
      onChange(countryCode, e.target.value);
    }
  };

  useEffect(() => {
    onChange(countryCode, value);
  }, [countryCode]);

  return (
    <SelectMobileStyled className="ap-flex ap-w-full" ref={parentElement} color={color} {...rest}>
      <SelectStyled
        id="select-mobile"
        value={countryCode}
        onChange={handleOnChangeSelect}
        placeholder="placeholder content"
        dropdownMatchSelectWidth={widthDropdown}
        color={color}
        error={error}
      >
        {map((country) => {
          const { code, icon, name } = country;
          return (
            <Option key={code} value={code}>
              <div className="ap-flex ap-space-x-1 ap-items-center">
                <ReactSVGStyled src={icon} />
                <span className="ap-pt-0.5">{` ${code}`}</span>
                <span className="ap-pt-0.5">{` ${name}`}</span>
              </div>
            </Option>
          );
        }, countriesCodes)}
      </SelectStyled>
      <InputContainer>
        <InputStyled
          placeholder={placeholder}
          value={value}
          onChange={handleChangeMobile}
          block
          color={color}
          error={!isEmpty(error)}
          ref={ref}
        />
      </InputContainer>
    </SelectMobileStyled>
  );
});

const countries = [
  { code: '+52', name: 'México', icon: MexicoSVG },
  { code: '+57', name: 'Colombia', icon: ColombiaSVG },
  { code: '+55', name: 'Ecuador', icon: EcuadorSVG },
  { code: '+54', name: 'Perú', icon: PeruSVG },
];

SelectMobile.defaultProps = {
  countriesCodes: countries,
  countryCodeDefaultValue: '+52',
  color: 'secondary',
  onChange: () => {},
  value: '',
  error: '',
  placeholder: '',
};

SelectMobile.propTypes = {
  /** Array of country code */
  // eslint-disable-next-line react/forbid-prop-types
  countriesCodes: PropTypes.array,
  /** Value default of country code */
  countryCodeDefaultValue: PropTypes.string,
  /** Theme color */
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
  /** Function callback, receives as parameter. (code, mobile) => {}. */
  onChange: PropTypes.func,
  /** Mobile number */
  value: PropTypes.string,
  /** Error message */
  error: PropTypes.string,
  /** mensaje para el placeholder */
  placeholder: PropTypes.string,
};

export default memo(SelectMobile);
