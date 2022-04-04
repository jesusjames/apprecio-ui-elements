import PropTypes from 'prop-types';
import {
  memo, useEffect, useRef, useState,
} from 'react';
import { map } from 'ramda';
import { Option } from '../Select/Select';

import MexicoSVG from './assets/images/mexico.svg';
import ColombiaSVG from './assets/images/colombia.svg';
import EcuadorSVG from './assets/images/ecuador.svg';
import PeruSVG from './assets/images/peru.svg';
import {
  InputContainer, InputStyled, ReactSVGStyled, SelectMobileStyled, SelectStyled,
} from './styles';

const SelectMobile = ({
  countrysCodes, countryCodeDefaultValue, color, onChange, value, ...rest
}) => {
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
      >
        {map((country) => {
          const { code, icon } = country;
          return (
            <Option key={code} value={code}>
              <div className="ap-flex ap-space-x-1 ap-items-center">
                <ReactSVGStyled src={icon} />
                <span className="ap-pt-0.5">{` ${code}`}</span>
              </div>
            </Option>
          );
        }, countrysCodes)}
      </SelectStyled>
      <InputContainer>
        <InputStyled
          placeholder="Input text"
          value={value}
          onChange={handleChangeMobile}
          block
          color={color}
        />
      </InputContainer>
    </SelectMobileStyled>
  );
};

const countrys = [
  { code: '+52', name: 'México', icon: MexicoSVG },
  { code: '+57', name: 'Colombia', icon: ColombiaSVG },
  { code: '+55', name: 'Ecuador', icon: EcuadorSVG },
  { code: '+54', name: 'Perú', icon: PeruSVG },
];

SelectMobile.defaultProps = {
  countrysCodes: countrys,
  countryCodeDefaultValue: '+52',
  color: 'secondary',
  onChange: () => {},
  value: '',
};

SelectMobile.propTypes = {
  /** Array of country code */
  // eslint-disable-next-line react/forbid-prop-types
  countrysCodes: PropTypes.array,
  /** Value default of country code */
  countryCodeDefaultValue: PropTypes.string,
  /** El color de la paleta que se usará para el componente. */
  color: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'quaternary']),
  onChange: PropTypes.func,
  value: PropTypes.string,
};

const areEqual = (prevProps, nextProps) => (
  prevProps.countryCodeDefaultValue === nextProps.countryCodeDefaultValue
  && prevProps.color === nextProps.color
  && prevProps.value === nextProps.value
  && prevProps.countrysCodes === nextProps.countrysCodes
);

export default memo(SelectMobile, areEqual);
