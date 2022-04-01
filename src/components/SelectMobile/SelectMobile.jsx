import PropTypes from 'prop-types';
import { useState } from 'react';
import { map } from 'ramda';
import { ReactSVG } from 'react-svg';
import { Option } from '../Select/Select';

import MexicoSVG from './assets/images/mexico.svg';
import { InputStyled, SelectStyled } from './styles';

const SelectMobile = ({
  countrysCodes, countryCodeDefaultValue,
}) => {
  console.log('SelectMobile');
  const [countryCode] = useState(countryCodeDefaultValue);

  return (
    <div className="ap-flex ap-w-full">
      <div>
        <SelectStyled
          value={countryCode}
          onChange={(val, options) => console.log(val, options)}
          placeholder="placeholder content"
        >
          {map((country) => {
            const { code, icon } = country;
            return (
              <Option key={code} value={code}>
                <div className="ap-flex ap-space-x-1 ap-items-center">
                  <ReactSVG src={icon} />
                  <span className="ap-pt-0.5">{` ${code}`}</span>
                </div>
              </Option>
            );
          }, countrysCodes)}
        </SelectStyled>
      </div>
      <div>
        <InputStyled placeholder="Input text" />
      </div>
    </div>
  );
};

const countrys = [
  { code: '+52', name: 'México', icon: MexicoSVG },
  { code: '+57', name: 'Colombia', icon: MexicoSVG },
  { code: '+55', name: 'Brasil', icon: MexicoSVG },
  { code: '+54', name: 'Argentina', icon: MexicoSVG },
];

SelectMobile.defaultProps = {
  countrysCodes: countrys,
  countryCodeDefaultValue: '+52',
};

SelectMobile.propTypes = {
  /** Array of country code */
  // eslint-disable-next-line react/forbid-prop-types
  countrysCodes: PropTypes.array,
  /** Value default of country code */
  countryCodeDefaultValue: PropTypes.string,
};

export default SelectMobile;
